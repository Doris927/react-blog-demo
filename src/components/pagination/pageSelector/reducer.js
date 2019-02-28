import {SETPAGE} from "./actionType";

const tag=['All','Hobby','Life','Study'];
const archives=['全部','勉強','生活','仕事']

const info = {
  current: 1,
  amount: 7,
  pageSize: 5,
    tag:tag[0],
    achrives:archives[0]
};

export default (state = info, action) =>{
    switch(action.type){
        case SETPAGE:{
            return {...state, current:action.page};
        };
        default:{
            return state;
        }
    }
}