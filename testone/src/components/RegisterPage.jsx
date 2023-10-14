import React, { useState } from 'react'

const RegisterPage = () => {
    const[userData , setUserData] = useState({name : '', email : '' , password : ''})
   
   function AddData(event){
    setUserData({...userData , [event.target.name]:event.target.value})
    // console.log(userData)
   }
    function HandleSubmit(event){
        event.preventDefault()
        if(userData.name && userData.email && userData.password){
            alert("successful")
            console.log(userData)
            
        }
    }

  return (
    <div>
       <form action=""onSubmit={HandleSubmit}>
        <label htmlFor="">Enter Name</label><br />
        <input type="text" name='name' id=''onChange={AddData} value={userData.name}/><br /><br />
        <label htmlFor="">Enter Email</label><br />
        <input type="email" name='email' id=''onChange={AddData} value={userData.email}/><br /> <br />
        <label htmlFor="">Enter Password</label><br />
        <input type="password" name='password' id=''onChange={AddData} value={userData.password}/><br />
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default RegisterPage
