import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { NavbarContext } from '../../contexts/NavbarContext'
import { PageContext } from '../../contexts/PageContext'

// styles
import "./320px.css"
import "./NavLink.css"

import { AiOutlineScissor } from 'react-icons/ai'

type componentType = {
    path: string
    text: string
    // currentUrl: string
}

const NavLink = ({ path, text }: componentType) => {
    //@ts-ignore
    const { currentUrl } = useContext(PageContext)
    const isCurrentUrl = currentUrl === path
  return (
     <li className='navbar-list__element'>{ isCurrentUrl? <div className='navlink-dot'><AiOutlineScissor/> </div>: null}<Link to={path} style={{ color: isCurrentUrl ? "#ffffff" : "#bcbcbc"}}>{text}</Link></li>
  )
}

export default NavLink