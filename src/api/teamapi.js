// import axios from "axios";

// const API_URL = "https://fluxtonx-dashboard.onrender.com/api/team"; // update if your backend uses a different port

// export const getteam = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };


import axios from "axios";
import { fallbackTeam } from "../utils/fallbackData";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/team";
const TIMEOUT = 3000;

export const getteam = async () => {
  try {
    const res = await axios.get(API_URL, { timeout: TIMEOUT });
    return res.data;
  } catch (error) {
    console.warn("Backend unavailable, using fallback data");
    return fallbackTeam;
  }
};
