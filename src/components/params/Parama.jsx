import React from 'react'
import { useParams } from 'react-router-dom'

const Parama = () => {

    const {userId} = useParams()

  return (
    <div>
        Details about user {userId} 
    </div>
  )
}

export default Parama
