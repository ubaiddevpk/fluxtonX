import axios from "axios";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/contact"; // update if your backend uses a different port

export const getcontactinfo = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
