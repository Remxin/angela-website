import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'


// layout
import Navbar from './layout/navbar/Navbar'

// contexts
import { PageContext } from './contexts/PageContext'

// animations
import { motion, useAnimationControls } from 'framer-motion'
const backgroundVariants = {
  initial: {
    opacity: .2
  },
  animate: {
    opacity: 1
  }
}

// styles
import "./Root320px.css"
import "./Root.css"

const Root = () => {
    const [currentUrl, setCurrentUrl] = useState("")
   
  return (
    <PageContext.Provider value={{ currentUrl, setCurrentUrl }}>
            <Navbar/>
        <motion.div className='gradient' variants={backgroundVariants} initial="initial" animate="animate">
        </motion.div>
            <Outlet/>
    </PageContext.Provider>
  )
}

export default Root