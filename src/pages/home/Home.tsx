import React from 'react'
import "./Home.css";

// assets
import barberImage from "../../assets/images/barber-shop-g1b69742e8_1920.jpg"

// styles
import "./320px.css"
import "./569px.css"
import "./Home.css"

// animations
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider/Slider';
const imageVariants = {
  initial: {
    opacity: 0,
    y: -20
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .3
    }
  }
}

const titleVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .6
    },
  }
}

const descriptionVariants = {
  initial: {
    opacity: 0,
    x: -20
  },

  animate: {
    opacity: 1,
    x: 0,

    transition: {
      delay: .75
    }
  }
}

const hoursVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    
    transition: {
      delay: 1
    }
  }
}



const Home = () => {
  return (
    <div>
      <div className="information">
        <motion.h1 className="studio-name" variants={titleVariants} initial="initial" animate="animate">Studio Fryzur Angela</motion.h1>
        <motion.p className='description' variants={descriptionVariants} initial='initial' animate='animate'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id? </motion.p>
        <motion.div className="opening-hours" variants={hoursVariants} initial='initial' animate='animate'>
          <div className="hours-section">
            <p>-- ◴ Otwarcie</p>
            <p>10:00 AM</p>
          </div>
          <div className="hours-section">
            <p>-- ◶ Zamknięcie</p>
            <p>08:00 PM</p>
          </div>

        </motion.div>
      </div>
      <div className="hairdresser-image-container">
        <motion.img src={barberImage} alt="hairdresser image" className='hairdresser-image' variants={imageVariants} initial="initial" animate="animate"/>
      </div>
      <motion.div className="page-text" variants={hoursVariants} initial='initial' animate='animate'>
        <h2 className='subtitle'>O nas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut?</p>

        <p>Przesuń w prawo, by przeglądać </p>
      </motion.div>
      {/* <Slider/> */}
    </div>
  )
}

export default Home