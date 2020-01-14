export default (state={},action)=>{
    switch(action.type){
        case"GET_ALL_USERS":
            return  {...action.payload}
        case"GET_USER":
            return{...state,...action.payload}
        case"GET_GIT_REPOS":
            return{...state,...action.payload}
        case"GET_GIT_FOLLOWERS":
            return{...state,...action.payload}
        case"GET_GIT_FOLLOWING":
            return{...state,...action.payload}
        case"GET_GIT_STARRED_REPOS":
            return{...state,...action.payload}
        default:
            return state
    }
}