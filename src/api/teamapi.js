import axios from "axios";

const API_URL = "https://fluxtonx-dashboard-backend-production-0888.up.railway.app/api/team"; // update if your backend uses a different port

export const getteam = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
