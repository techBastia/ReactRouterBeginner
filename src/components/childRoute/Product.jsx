import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <input type="search" placeholder='search input' />
      <nav>
            <Link to= 'feature'>Feature</Link>
            <Link to= 'new'>new</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Product
