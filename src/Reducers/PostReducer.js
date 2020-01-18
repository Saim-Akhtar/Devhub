export default (state={},action)=>{
    switch(action.type){
        case"ADD_POST":
            return{...state,...action.payload}
        case "GET_POSTS":
            return{...state,...action.payload}
        case "GET_POST":
            return{...state,...action.payload}
        default:
            return state
    }
}