import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1>this is home page</h1>
      <button onClick={() => navigate('order-summary', {replace : true})}>Please Order</button>
    </>
  )
}

export default Home
