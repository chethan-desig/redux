import {combineReducers} from 'redux';
import article from './article_Reducer';
import gallery from './gallery_reducer';

const rootReducer = combineReducers({
    article,
    gallery
})
export default rootReducer;