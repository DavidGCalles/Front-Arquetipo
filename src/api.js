// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL : 'https://back-arquetipo-856517455627.europe-southwest1.run.app/api',
  //baseURL: 'http://localhost:5000/api', // Base URL for your Flask API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to ping the server
export const pingServer = async () => {
  try {
    const response = await apiClient.get('/ping');
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


// You can add more API functions here as needed
