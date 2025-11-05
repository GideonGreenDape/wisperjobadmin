import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL?.trim();


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — redirecting to login...");
      localStorage.removeItem("authToken");
      window.location.href = "/signin"; 
    }
    return Promise.reject(error);
  }
);

export const getRequest = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const postRequest = async (url, payload = {}) => {
  try {
    console.log('here is the payload',payload);
    const response = await apiClient.post(url, payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const putRequest = async (url, payload = {}) => {
  try {
    const response = await apiClient.put(url, payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const uploadRequest = async (url, fileData) => {
  try {
    const response = await apiClient.post(url, fileData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default apiClient;
