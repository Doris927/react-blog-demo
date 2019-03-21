import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {reducer as blogListReducer} from './components/pagination/blogList';
import {reducer as articleReducer} from './components/article/article';
import {reducer as archivesReducer} from './components/archives'
import {reducer as pageSelectorReducer} from './components/pagination/pageSelector'

const reducer = combineReducers({
    blogList: blogListReducer,
    pageInfo: pageSelectorReducer,
    article: articleReducer,
    archives:archivesReducer
});

export default createStore(reducer,{},applyMiddleware(thunkMiddleware));