import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_API_URL;

/**
 * Makes an authenticated API request with JWT token
 * @param {string} endpoint - API endpoint (e.g., "/api/auth/profile")
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<Response>} - Fetch response
 */

// ... existing code ...

export const authenticatedFetch = async (endpoint, options = {}) => {
  const token = Cookies.get("jwt_token");
  
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(apiUrl + endpoint, {
    ...options,
    headers,
  });

  return response;
};

/**
 * Makes a simple GET request with authentication
 * @param {string} endpoint - API endpoint
 * @returns {Promise<Response>} - Fetch response
 */
export const authenticatedGet = (endpoint) => {
  return authenticatedFetch(endpoint, { method: "GET" });
};

/**
 * Makes a POST request with authentication
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body data
 * @returns {Promise<Response>} - Fetch response
 */
export const authenticatedPost = (endpoint, data) => {
  return authenticatedFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export default {
  authenticatedFetch,
  authenticatedGet,
  authenticatedPost,
};