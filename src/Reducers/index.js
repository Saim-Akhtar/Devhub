import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import DevelopersReducer from './DeveloperReducer'
import PostReducer from './PostReducer'
export default combineReducers({
    Auth:AuthReducer,
    Developers:DevelopersReducer,
    Post:PostReducer
})