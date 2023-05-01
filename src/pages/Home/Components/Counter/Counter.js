import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import "./Counter.css" ;
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Counter() {
  const [counterOn ,setCounterOn] = useState(false);

  return (
    <div className='counter-image'id="Waqf">
    <div className='overlay py-5 d-flex justify-content-center align-items-center '>
      <div className = "container">
        <div className='row'>
            <div className='col-md-4 '>
           <div className='text-center counter-items py-md-3 '>
           <FontAwesomeIcon icon={faEarthAmericas}  className='text-white fs-1 py-sm-1 py-md-2 ' />
           <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <p className='py-md-2  counter-p count-num'>
            {counterOn && <CountUp start={0} end={7000} duration={3} delay={0}/>} 
            +
           </p>
           </ScrollTrigger>
           <p className='text-white  counter-p  '>عددالأوقاف في العالم</p>
           </div>
            </div>
            <div className='col-md-4'>
           <div className='text-center counter-items  py-md-3  '>
           <FontAwesomeIcon icon={faEarthAmericas}  className='text-white fs-1 py-sm-1 py-md-2 ' />
           <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <p className='py-md-2  counter-p count-num'>
            {counterOn && <CountUp start={0} end={7000} duration={3} delay={0}/>} 
            +
           </p>
           </ScrollTrigger>
           <p className='text-white counter-p '>عددالأوقاف في مصر</p>
           </div>
            </div>
            <div className='col-md-4'>
           <div className='text-center counter-items  py-md-3 '>
           <FontAwesomeIcon icon={faEarthAmericas}  className='text-white fs-1 py-sm-1 py-md-2 ' />
           <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
           <p className='py-md-2  counter-p count-num'>
            {counterOn && <CountUp start={0} end={7000} duration={3} delay={0}/>} 
            +
           </p>
           </ScrollTrigger>
           <p className='text-white counter-p '>عددالأوقاف في دوام</p>
           </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
