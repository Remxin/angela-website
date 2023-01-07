import { MotionConfig } from 'framer-motion'
import React from 'react'

import { motion } from 'framer-motion'
import "./320px.css"
import "./769px.css"

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
]

const imageVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const Gallery = () => {
  return (
    <motion.div
    className='gallery'
    transition={{ staggerChildren: 0.2 }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.5}}
    >
      {images.map((i) => {
        return (
        <motion.div key={i} variants={imageVariants} className='gallery-image'>
          <img src={i} alt="gallery image" />
        </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Gallery