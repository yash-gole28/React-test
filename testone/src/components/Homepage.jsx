import React from 'react'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>navigate('/useReducer')}>to useReducer</button>
      <button onClick={()=>navigate('/Todo')}>Todo</button>
      <button onClick={()=>navigate('/RegisterPage')}>RegisterPage</button>
      <button onClick={()=>navigate('/products')}>Multiple Products</button>
    </div>
  )
}

export default Homepage
