import {GET_NUMBERS_BASKET} from './types'
export const getNumbers = ()=>{
    return (dispatch) =>{
        console.log("getting add basket numbers");
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
};