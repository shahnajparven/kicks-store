
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,

  ALL_CATEGORIES_REQUEST ,
   ALL_CATEGORIES_SUCCESS ,
   ALL_CATEGORIES_FAIL,
  
  CLEAR_ERRORS,
} from "../constants/productConstants";
import axios from "axios";


//Get All Products
export const getProduct = () => async (dispatch) => {

  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
 
     const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,

    });
  }
};


// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Get All Products
export const getCategories = () => async (dispatch) => {

  try {
    dispatch({ type: ALL_CATEGORIES_REQUEST });
 
     const { data } = await axios.get('https://api.escuelajs.co/api/v1/categories');
    dispatch({
      type: ALL_CATEGORIES_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ALL_CATEGORIES_FAIL,
      payload: error.response.data.message,

    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};