export default (state=false,action)=>{
    switch(action.type){
        case"OPEN_CHAT_NAV":
            return state=true
        case"CLOSE_CHAT_NAV":
            return state=false
        default:
            return state
    }
}