import Axios from "axios";

const API_URL = "http://localhost:1337/api";

export const getProducts = async () => {
  try {
    const response = await Axios.get(API_URL + '/products');
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const response = await Axios.get(API_URL + '/reviews');
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const createReviews = async (reviewData) => {
  try {
    const response = await Axios.post(API_URL + '/reviews', reviewData);
    return response;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
