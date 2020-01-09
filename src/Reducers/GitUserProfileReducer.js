// import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case"GET_USER_GIT":
            return {...action.payload}
        case"GET_GIT_REPOS":
            return{...state,...action.payload}
        case"GET_GIT_FOLLOWERS":
            return{...state,...action.payload}
        case"GET_GIT_FOLLOWING":
            return{...state,...action.payload}
        default:
            return state
    }
}