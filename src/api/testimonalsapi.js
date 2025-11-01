// import axios from "axios";

// const API_URL = "https://fluxtonx-dashboard.onrender.com/api/testimonials"; // update if your backend uses a different port

// export const getTestimonials = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };



// src/api/testimonalsapi.js - OPTIMIZED WITH FALLBACK
import axios from "axios";
import { fallbackTestimonials } from "../utils/fallbackData";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/testimonials";
const TIMEOUT = 3000;

export const getTestimonials = async () => {
  try {
    const res = await axios.get(API_URL, { timeout: TIMEOUT });
    return res.data;
  } catch (error) {
    console.warn("Backend unavailable, using fallback data");
    return fallbackTestimonials;
  }
};