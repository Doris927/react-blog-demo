import * as Status from "../blogList/status";
import {SET_PAGE} from "./actionTypes";


const defaultInfo = {
    current: 1,
    amount: 7,
    pageSize: 5
};


export default (state = {...defaultInfo}, action) => {
    switch(action.type) {
        case SET_PAGE:{
            return {...state, current:action.current}
        }
        default: {
            return state;
        }
    }
}