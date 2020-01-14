import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import DevelopersReducer from './DeveloperReducer'
export default combineReducers({
    Auth:AuthReducer,
    Developers:DevelopersReducer
})