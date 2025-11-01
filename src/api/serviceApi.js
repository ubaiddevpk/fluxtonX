// import axios from "axios";

// const API_URL = "https://fluxtonx-dashboard.onrender.com/api/services"; // update if your backend uses a different port

// export const getServices = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };


import axios from "axios";
import { fallbackServices } from "../utils/fallbackData";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/services";
const TIMEOUT = 3000; // 3 seconds timeout

export const getServices = async () => {
  try {
    const res = await axios.get(API_URL, { timeout: TIMEOUT });
    return res.data;
  } catch (error) {
    console.warn("Backend unavailable, using fallback data:", error.message);
    return fallbackServices;
  }
};