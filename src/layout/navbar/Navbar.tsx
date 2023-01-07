import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// hooks
import { useWindowSize } from '../../hooks/useWindowSize'

//contexts
import { PageContext } from '../../contexts/PageContext'
import { NavbarContext } from '../../contexts/NavbarContext'

// components
import NavLink from '../../components/navlink/NavLink'

// icons
import { FaAlignJustify } from 'react-icons/fa'
import { AiOutlineScissor } from "react-icons/ai"

// assets
import lightLogo from "../../assets/logo/2.png"

// images
import "./320px.css"
import "./Navbar.css"

// animations
import { motion, AnimatePresence } from 'framer-motion'

const shadeVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity:1
  },
}

const mobileNavVariants = {
  initial: {
    y: -200
  },

  animate: {
    y: -100,
  },
  

  exit: {
    y: -420
  }

}

const Navbar = () => {
  //@ts-ignore
  const { currentUrl, setCurrentUrl } = useContext(PageContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [windowWidth] = useWindowSize()
  const [navOpened, setNavOpened] = useState(false)

  useEffect(() => {
    setCurrentUrl(location.pathname)
  }, [location])
  
  return (
    <NavbarContext.Provider value={{ visible: navOpened, setVisible: setNavOpened}}>
    <div className="navbar">
      <img src={lightLogo} alt="studio logo" className="navbar-logo" onClick={() => navigate("/")}/>
      { windowWidth >= 769 ?  <ul className='navbar-list'>
            {/* <NavLink path='/' text='Home'/> */}
            <NavLink path='/kontakt' text='Kontakt'/>
            <NavLink path='/galeria' text='Galeria'/>
            <NavLink path='/oferta' text='Oferta'/>
        </ul> : 
          <div className='hamburger-container'>
             <AnimatePresence>
            { navOpened ? 
              <>
                <motion.ul className='mobile-navigation' variants={mobileNavVariants} initial='initial' animate='animate' exit='exit'>
                {/* <NavLink path='/' text='Home'/> */}
                <NavLink path='/kontakt' text='Kontakt'/>
                <NavLink path='/galeria' text='Galeria'/>
                <NavLink path='/oferta' text='Oferta'/>
                </motion.ul>
              </>
            : null}
            </AnimatePresence> 

            { navOpened ?   
              <motion.div variants={shadeVariants} initial="initial" animate="animate" exit="initial">
                  <AiOutlineScissor color='#fff' onPointerDown={() => setNavOpened(false)}/>
              </motion.div>
             : null}

  
            { !navOpened ?  
                <motion.div variants={shadeVariants} initial="initial" animate="animate" exit="initial">
                  <FaAlignJustify color="#fff" onPointerDown={() => setNavOpened(true)}/>
                </motion.div>
              : null}
            

              {/* {navOpened ? <Animate : null} */}
          </div>
        }
       
    </div>
    </NavbarContext.Provider>
  )
}

export default Navbar