import React, { useState, useMemo } from 'react'

import { AnimatePresence, motion, useAnimation } from 'framer-motion'

// json
import products from "./products.json"
// style
import "./320px.css"
import "./569px.css"
import "./769px.css"

import ProductCard from '../../components/productCard/ProductCard'

// constants
type choiceType = "męskie" | "damskie" | ""

const Products = () => {
  const [choice, setChoice] = useState<choiceType>("")
  const haircutsVariantsController = useAnimation()

  const Variants = useMemo(() => {
    if (!choice) return null
    const chosenProducts = products.filter((p) => p.name === choice)
    // haircutsVariantsController.start("initial")
    // haircutsVariantsController.start("animate")

    return chosenProducts[0].variants.map((p) => {
      return <ProductCard key={p.name} name={p.name} price={p.price}/>
    })
  }, [choice])

  return (
    <div className='container'>
      <h1 className='page-title'>Wybierz strzyzenie</h1>
      <div className='haircut-choice-container'>
        <div onPointerDown={() => setChoice("damskie")} className='haircut-choice haircut-choice-woman'>
          <img className='haircut-image' src="/woman_haircut.jpg" alt="fryzura damska" />
          <p className='haircut-name'>Strzyzenie damskie</p>
        </div>
        <div onPointerDown={() => setChoice("męskie")} className='haircut-choice haircut-choice-man'>
          <img  className='haircut-image' src="/man_haircut.jpg" alt="fryzura męska"/>
          <p className='haircut-name'>Strzyzenie męskie</p>
        </div>
      </div>
      <AnimatePresence>
      { choice !== "" ? <>
        <h2 className='chosen-title'>Wybrano strzyzenie {choice}</h2>
        <motion.div className='haircuts-styles'
        transition={{ staggerChildren: 0.2 }}
        initial="initial"
        animate="animate"
        exit='initial'
        >
          {Variants}
        </motion.div>
      </> : null}
      </AnimatePresence>
    </div>
  )
}

export default Products