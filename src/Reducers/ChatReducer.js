export default (state={},action)=>{
    switch(action.type){
        case"GET_CHATS":
            return {...state,...action.payload}
        case"GET_CHAT":
            return {...state,...action.payload}
        default:
            return state
    }

}