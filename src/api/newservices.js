import axios from "axios";
import { fallbackNewServices } from "../utils/fallbackData.js";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/newservices";
const TIMEOUT = 3000;

export const getnewServices = async () => {
  try {
    const res = await axios.get(API_URL, { timeout: TIMEOUT });
    return res.data;
  } catch (error) {
    console.warn("Backend unavailable, using fallback data");
    return fallbackNewServices;
  }
};
