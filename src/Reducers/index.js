import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import DevelopersReducer from './DeveloperReducer'
import PostReducer from './PostReducer'
import ChatReducer from './ChatReducer'
export default combineReducers({
    Auth:AuthReducer,
    Developers:DevelopersReducer,
    Post:PostReducer,
    Chats:ChatReducer
})