import React from 'react'
import { ImSad, ImHome } from "react-icons/im"
import { Link } from 'react-router-dom'

import "./320px.css"

const Page404 = () => {
  return (
    <div className='container'>
      <p className='text'>Ta strona nie istnieje</p>
      <p className='icon'><ImSad/></p>
      <button className='link-button'>
        <Link to="/" className='link'><ImHome/> Powrót do strony głównej</Link>
      </button>
    </div>
  )
}

export default Page404