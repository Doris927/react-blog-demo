import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {reducer as blogListReducer} from './components/pagination/blogList';
import {reducer as pageSelectorReducer} from './components/pagination/pageSelector';
import {reducer as articleReducer} from './components/article/article';

const reducer = combineReducers({
    blogList: blogListReducer,
    pageInfo: pageSelectorReducer,
    article: articleReducer
});

export default createStore(reducer,{},applyMiddleware(thunkMiddleware));