import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE,SET_ARCHIVE} from './actionTypes.js';
import * as Status from './status.js';

export default (state = {archive:null,status: Status.LOADING}, action) => {
    switch(action.type) {
        case FETCH_STARTED: {
            return {...state,status: Status.LOADING};
        }
        case FETCH_SUCCESS: {
            //console.log(action.result);
            return {...state,status: Status.SUCCESS, data:action.result};
        }
        case FETCH_FAILURE: {
            return {...state,status: Status.FAILURE};
        }
        case SET_ARCHIVE:{
            return {...state,archive:action.archive}
        }
        default: {
            return state;
        }
    }
}