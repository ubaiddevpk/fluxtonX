// src/api/optimizedApi.js
import axios from "axios";
import {
  fallbackServices,
  fallbackNewServices,
  fallbackProjects,
  fallbackTeam,
  fallbackTestimonials,
  fallbackContactInfo
} from "../utils/fallbackData";

const API_BASE = "https://fluxtonx-dashboard.onrender.com/api";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const REQUEST_TIMEOUT = 3000; // 3 seconds

// Simple in-memory cache
const cache = new Map();

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

const fetchWithFallback = async (endpoint, fallbackData) => {
  const cacheKey = endpoint;
  
  // Check cache first
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const res = await axios.get(`${API_BASE}${endpoint}`, { 
      timeout: REQUEST_TIMEOUT 
    });
    setCachedData(cacheKey, res.data);
    return res.data;
  } catch (error) {
    console.warn(`API failed for ${endpoint}, using fallback data`);
    return fallbackData;
  }
};

export const getServices = () => fetchWithFallback("/services", fallbackServices);
export const getnewServices = () => fetchWithFallback("/newservices", fallbackNewServices);
export const getprojects = () => fetchWithFallback("/projects", fallbackProjects);
export const getteam = () => fetchWithFallback("/team", fallbackTeam);
export const getTestimonials = () => fetchWithFallback("/testimonials", fallbackTestimonials);
export const getcontactinfo = () => fetchWithFallback("/contact", fallbackContactInfo);