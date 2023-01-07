import React, { useEffect, useState } from 'react'

// animations 
import { motion, useAnimation } from 'framer-motion'

// assets
import image1 from "../../assets/images/slider/1.jpg"
import image2 from "../../assets/images/slider/2.jpg"
import image3 from "../../assets/images/slider/3.jpg"
import image4 from "../../assets/images/slider/4.jpg"

// styles
import "./320px.css"

// constants
const images = [image1, image2, image3, image4]


const Slider = () => {
  const [movementPercentage, setMovementPercentage] = useState(0)
  const sliderController = useAnimation()
  const imageController = useAnimation()

  useEffect(() => {
    sliderController.start({
      opacity: 1
    })

    let mousePosX = 0
    let percentage = 0
    let prevPercentage = 0
    let nextPercentage = 0

    window.onpointerdown = e => {
      mousePosX = e.pageX
    }

    window.onpointermove = e => {
      if (mousePosX === 0) return
      const mouseDelta = mousePosX - e.clientX,
      maxDelta = window.innerWidth / 2
      
      percentage = Math.round((mouseDelta / maxDelta) * -100)
      nextPercentage = percentage + prevPercentage

      nextPercentage = Math.min(nextPercentage, 0)
      nextPercentage =  Math.max(nextPercentage, -100)


      setMovementPercentage(nextPercentage)
      sliderController.start({
        x: `${nextPercentage}%`
      })

      imageController.start({
        objectPosition: `${nextPercentage + 100}% 50%`
      })
      
    }
    
    window.onpointerup = () => {
      prevPercentage = nextPercentage
      mousePosX = 0
    }
  }, [])

  // console.log(mousePos)
  return (
    <motion.div className='slider' animate={sliderController} initial={{ opacity: 0}}>
        {images.map((image) => {
            return <motion.img key={image} animate={imageController} src={image} alt="slider image" className='slider-image' draggable={false}/>
        })} 
    </motion.div>
  )
}

export default Slider