import axios from 'axios'
import {PRODUCT__LIST_REQUEST,
    PRODUCT__LIST_SUCCESS,
    PRODUCT__LIST_FAIL,
    PRODUCT__DETAILS_REQUEST,
    PRODUCT__DETAILS_SUCCESS,
    PRODUCT__DETAILS_FAIL} from '../constants/productConstants.js'

  export const listProducts = () => async (dispatch) => {
      try {
          dispatch({ type: PRODUCT__LIST_REQUEST})

          const {data} = await axios.get('/api/products')

          dispatch({
              type: PRODUCT__LIST_SUCCESS,
              payload: data
          })
      } catch (error) {
          dispatch({
              type: PRODUCT__LIST_FAIL,
              payload: error.response && error.response.data.message ? error.response.data.message: error.message,
          })
      }
    }

    export const listProductDetails = (id) => async (dispatch) => {
        try {
            dispatch({ type: PRODUCT__DETAILS_REQUEST})
  
            const {data} = await axios.get(`/api/products/${id}`)
  
            dispatch({
                type: PRODUCT__DETAILS_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: PRODUCT__DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message: error.message,
            })
        }
      }
      
    