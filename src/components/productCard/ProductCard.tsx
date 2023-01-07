import React from 'react'

import { motion } from 'framer-motion'
import "./320px.css"
import "./569px.css"
import "./769px.css"


const cardVariants = {
    initial: {
        opacity: 0,
        y: -30
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

type componentType = {
    name: string,
    price: number 
}
const ProductCard = ({ name, price }: componentType) => {
  return (
    <motion.div className='product-container' variants={cardVariants}>
        <p>{name}</p>
        <p>{price}zł</p>
    </motion.div>
  )
}

export default ProductCard