export const onSuccess = async(response) => {
    // console.log("here we go")
    try{
      const res=await fetch(`http://localhost:8000/user/login/getToken`,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code:response.code
        })
      })
      const token=await res.json()
      // console.log(token)
      const result=await fetch(`http://localhost:8000/user/login/github`,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
      })
      const data=await result.json()
      // console.log(data)
      return data
    }
  
    catch(err){
      console.log(err)
      return err
    }
}
export const onFailure = async(response) =>{
    console.error(response);
    return response
  }