import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'


export default function Header() {
  return (
    <div className='bg'>
      <div className='overlay'>
      <Navbar/>
      <div className='container contant'>
        <h1 className='h-title'>دوام</h1>
        <p className='text'>منصة لحفظ الحجج الوقفية بأستخدام تقنية البلوكتشين ضد تغير الظروف والأعوام</p>
      </div>
      </div>
      
    </div>
  )
}
