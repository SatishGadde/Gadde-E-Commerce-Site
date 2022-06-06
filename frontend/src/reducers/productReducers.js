import {PRODUCT__LIST_REQUEST,
      PRODUCT__LIST_SUCCESS,
      PRODUCT__LIST_FAIL,
      PRODUCT__DETAILS_REQUEST,
      PRODUCT__DETAILS_SUCCESS,
      PRODUCT__DETAILS_FAIL,} from '../constants/productConstants.js'

export const productListReducer =   (state = {products:[]},action) => {
    switch (action.type){
        case PRODUCT__LIST_REQUEST:
              return { loading: true, products: [] }
        case PRODUCT__LIST_SUCCESS:
              return { loading: false, products: action.payload }
        case  PRODUCT__LIST_FAIL:
              return { loading: false, error: action.payload }
              default:
                  return state
    }
}

export const productDetailsReducer =   (state = {product:{ reviews: []}},action) => {
      switch (action.type){
          case PRODUCT__DETAILS_REQUEST:
                return { loading: true, ...state}
          case PRODUCT__DETAILS_SUCCESS:
                return { loading: false, product: action.payload }
          case  PRODUCT__DETAILS_FAIL:
                return { loading: false, error: action.payload }
                default:
                    return state
      }
  }