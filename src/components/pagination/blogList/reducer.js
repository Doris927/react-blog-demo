import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, SET_PAGE, SET_ARCHIVE} from './actionTypes.js';
import * as Status from './status.js';

const info = {
    current: 1,
    amount: 7,
    pageSize: 5,
    archive:null
};

export default (state = {status: Status.LOADING, ...info}, action) => {
    switch(action.type) {
        case FETCH_STARTED: {
            return {...state, status: Status.LOADING};
        }
        case FETCH_SUCCESS: {
            //console.log(action.result);
            return {...state, status: Status.SUCCESS, data:action.result};
        }
        case FETCH_FAILURE: {
            return {...state, status: Status.FAILURE};
        }
        case SET_PAGE:{
            return {...state, current:action.current}
        }
        default: {
            return state;
        }
    }
}