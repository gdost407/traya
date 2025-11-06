import axios from 'axios';
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_API_URL;

/**
 * Creates an authenticated axios instance
 * @returns {axios.AxiosInstance} - Configured axios instance
 */

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      Cookies.remove("jwt_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

/**
 * Makes an authenticated API request (deprecated - use axiosInstance directly)
 * @param {string} endpoint - API endpoint (e.g., "/api/auth/profile")
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<Response>} - Fetch response
 */
export const authenticatedFetch = async (endpoint, options = {}) => {
  console.warn("authenticatedFetch is deprecated. Use axiosInstance instead.");
  
  try {
    const response = await axiosInstance({
      url: endpoint,
      method: options.method || 'GET',
      data: options.body ? JSON.parse(options.body) : undefined,
      headers: options.headers,
    });
    
    // Convert axios response to fetch-like response for backward compatibility
    return {
      ok: response.status >= 200 && response.status < 300,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      json: async () => response.data,
      text: async () => JSON.stringify(response.data),
    };
  } catch (error) {
    if (error.response) {
      return {
        ok: false,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers,
        json: async () => error.response.data,
        text: async () => JSON.stringify(error.response.data),
      };
    }
    throw error;
  }
};

/**
 * Makes a simple GET request with authentication using axios
 * @param {string} endpoint - API endpoint
 * @returns {Promise<axios.AxiosResponse>} - Axios response
 */
export const authenticatedGet = async (endpoint) => {
  return axiosInstance.get(endpoint);
};

/**
 * Makes a POST request with authentication using axios
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body data
 * @returns {Promise<axios.AxiosResponse>} - Axios response
 */
export const authenticatedPost = async (endpoint, data) => {
  return axiosInstance.post(endpoint, data);
};

/**
 * Makes a PUT request with authentication using axios
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body data
 * @returns {Promise<axios.AxiosResponse>} - Axios response
 */
export const authenticatedPut = async (endpoint, data) => {
  return axiosInstance.put(endpoint, data);
};

/**
 * Makes a DELETE request with authentication using axios
 * @param {string} endpoint - API endpoint
 * @returns {Promise<axios.AxiosResponse>} - Axios response
 */
export const authenticatedDelete = async (endpoint) => {
  return axiosInstance.delete(endpoint);
};

export default {
  authenticatedFetch,
  authenticatedGet,
  authenticatedPost,
};