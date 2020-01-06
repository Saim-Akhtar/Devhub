import { onSuccess } from "../Api/Api"
import History from '../History'

export const signIn=(response)=>async dispatch=>{
   
    History.push('/dashboard')
    let data=await onSuccess(response)
    dispatch({type:"SIGN_IN",payload:data})
    
}
export const signOut=()=>{
    return{type:"SIGN_OUT"}
}