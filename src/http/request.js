import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || " ";


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
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
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
