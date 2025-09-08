import axios from "axios";

const API_URL = "https://fluxtonx-dashboard.onrender.com/api/newservices"; // update if your backend uses a different port

export const getnewServices = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

