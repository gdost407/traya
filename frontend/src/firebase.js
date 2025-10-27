// frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);

export function setupRecaptcha(containerId = "recaptcha-container") {
  if (typeof window === "undefined") return;

  // prevent double init
  if (window.recaptchaVerifier) return window.recaptchaVerifier;

  // ✅ ensure auth is from the same app context
  const authInstance = getAuth();

  window.recaptchaVerifier = new RecaptchaVerifier(
    authInstance,
    containerId,
    {
      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha resolved:", response);
      },
      "expired-callback": () => {
        console.warn("Recaptcha expired, resetting...");
        window.recaptchaVerifier?.clear();
      },
    }
  );

  return window.recaptchaVerifier;
}


export async function requestFcmToken(vapidKey) {
  try {
    const token = await getToken(messaging, { vapidKey });
    return token;
  } catch (err) {
    console.warn("FCM token error:", err);
    return null;
  }
}

onMessage(messaging, (payload) => {
  // foreground messages
  console.log("FCM foreground message:", payload);
  if (payload?.notification) {
    const { title, body } = payload.notification;
    // simple alert — you may replace with Toast
    alert(title + "\n" + body);
  }
});

export { app, auth, messaging, signInWithPhoneNumber, onAuthStateChanged };
