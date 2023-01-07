import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaGoogle, FaMapMarkerAlt } from "react-icons/fa"

// animations
import { motion } from 'framer-motion'

import "./320px.css"
import "./Contact.css"

// const 
const pVariants = {
  initial: {
    opacity: 0,
    y: 20
  },

  animate: {
    opacity: 1,
    y: 0
  }
}

const titleVariants = {
  initial: {
    opacity: 0,
    x: -20
  },

  animate: {
    opacity: 1,
    x: 0
  }
}

const Contact = () => {
  return (
    <div className='container'>
      <motion.h1 className='contact' variants={titleVariants} initial="initial" animate="animate">Kontakt</motion.h1>
      <motion.div className='contact-icons' 
        transition={{ staggerChildren: 0.2, delayChildren: 0.3}}
        initial="initial"
        animate="animate"
      >
        <motion.p variants={pVariants}><FaPhoneAlt/> +48 000 000 000</motion.p>
        <motion.p variants={pVariants}><FaEnvelope/> test@email.com</motion.p>
        <motion.p variants={pVariants}><FaMapMarkerAlt/> ul.Aaa 4, 00-000</motion.p>
      </motion.div>
      <motion.h2 variants={titleVariants} initial="initial" animate="animate" className='follow'>Zaobserwuj</motion.h2>
      <motion.div className='follow-icons'
        transition={{ staggerChildren: 0.2, delayChildren: 0.7 }}
        initial="initial"
        animate="animate"
      >
        <motion.a variants={pVariants} href="https://pl-pl.facebook.com"><FaFacebookSquare className='facebook'/></motion.a>
        <motion.a variants={pVariants} href="https://www.instagram.com"><FaInstagramSquare className='instagram'/></motion.a>
        <motion.a variants={pVariants} href="https://www.google.com/"><FaGoogle className='google'/></motion.a>
      </motion.div>
    </div>
  )
}

export default Contact