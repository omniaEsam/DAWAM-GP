import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
  return (
    <div className='bg'>
       <Navbar/>
      <div className='overlay d-flex align-items-center'>
      <div className='container '>
        <h1 className='h-title'>دوام</h1>
        <p className='text'>منصة لحفظ الحجج الوقفية بأستخدام تقنية البلوكتشين ضد تغير الظروف والأعوام</p>
      </div>
      </div>
      <Link to=""><FontAwesomeIcon icon="fa-solid fa-down-long" /></Link>
    </div>
  )
}
