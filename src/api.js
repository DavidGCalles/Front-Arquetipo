// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  //baseURL : 'https://back-arquetipo-856517455627.europe-southwest1.run.app/api',
  baseURL: 'http://localhost:5000/', // Base URL for your Flask API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to ping the server
export const pingServer = async () => {
  try {
    const response = await apiClient.get('ping');
    return response.data;
  } catch (error) {
    console.error('Error in pingServer:', error);
    throw error;
  }
};

// Function to initiate OAuth login flow
export const initiateOAuthLogin = async () => {
  try {
    const response = await apiClient.get('/login');
    if (response.data.url) {
      window.location.href = response.data.url; // Redirect the user
    }
    return response.data;
  } catch (error) {
    console.error('Error in initiateOAuthLogin:', error);
    throw error;
  }
};

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    const response = await apiClient.get('/demo_crud');
    return response.data;
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
};

// Function to fetch all items
export const fetchAllItems = async () => {
  try {
    const response = await apiClient.get('/demo_crud');
    return response.data;
  } catch (error) {
    console.error('Error in fetchAllItems:', error);
    throw error;
  }
};

// Function to insert a new item
export const insertNewItem = async (newItem) => {
  try {
    const response = await apiClient.post('/demo_crud', newItem);
    return response.data;
  } catch (error) {
    console.error('Error in insertNewItem:', error);
    throw error;
  }
};

// Function to search items
export const searchItems = async (queryParams) => {
  try {
    const response = await apiClient.get('/demo_crud/search', { params: queryParams });
    return response.data;
  } catch (error) {
    console.error('Error in searchItems:', error);
    throw error;
  }
};

// Function to delete an item by ID
export const deleteItem = async (itemId) => {
  try {
    const response = await apiClient.delete(`/demo_crud/item/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error in deleteItem:', error);
    throw error;
  }
};