import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import GitUserProfileReducer from './GitUserProfileReducer'
export default combineReducers({
    GitUserProfile:GitUserProfileReducer,
    Auth:AuthReducer
   
})