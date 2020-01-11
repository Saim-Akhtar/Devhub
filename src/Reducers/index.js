import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import GitUserProfileReducer from './GitUserProfileReducer'
import ChatNavReducer from './ChatNavReducer'
export default combineReducers({
    GitUserProfile:GitUserProfileReducer,
    Auth:AuthReducer,
    ChatNav:ChatNavReducer
})