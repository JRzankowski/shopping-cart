import {ADD_PRODUCT_BASKET} from "./types";

export const addToBasket = ()=>{
    return (dispatch) =>{
        console.log("adding to basket");
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    }
};