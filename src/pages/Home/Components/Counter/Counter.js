import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import "./Counter.css" ;

export default function Counter() {
  return (
    <div className='counter-image'>
    <div className='overlay py-5 d-flex justify-content-center align-items-center'>
      <div className = "container">
        <div className='row'>
            <div className='col-4'>
           <div className='text-center counter-items py-5'>
           <FontAwesomeIcon icon={faEarthAmericas}  className='text-white fs-5' />
           <p>7000+</p>
           <p className='text-white'>عددالأوقاف في العالم</p>
           </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
