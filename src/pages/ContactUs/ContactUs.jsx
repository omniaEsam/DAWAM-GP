import React from 'react'
import Navbar from '../Home/Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconContant from './Icon'
import { NavLink } from 'react-router-dom'
import Footer from '../Home/Components/Footer/Footer'

export default function ContactUs() {
  return (
      <div id='contact-us'>
              <Navbar/>
      <div className="container">
        <div className="row g-1 my-5">
            <div className=" col-md-5 offset-1 ">
             <h1 className='fs-3 mb-4'>تابعنا لمعرفة المزيد من المعلومات</h1>
             { iconContant.map((item)=>{
              return(
                <div className='d-flex' key={item.id}>
                <div>
                <FontAwesomeIcon icon={item.icon} size='xl' style={{color:'var( --darkgray-color)'}}/> 
                </div>
                <div>
                  <p><NavLink to='#' className='fs-5 icon-link'>{item.link}</NavLink></p>
                </div>
                </div>     
              )
              })}
            </div>
            <div className=" col-md-6">
          <form className='form-style'>
         <input className="form-control contact-input pt-2 pb-2" type="text" placeholder="الأسم" aria-label="default input example"/>
         <input className="form-control contact-input pt-2 pb-2" type="text" placeholder="البريد الإلكتروني" aria-label="default input example"/>
         <textarea className="form-control" type="text" placeholder="اترك رسالتك" aria-label="default input example"/>
            <div className='col-12'>
            <Link className='btn btn-sm btn-green ' to="/submit" role="button">إرسال</Link>
            </div>
       </form>  
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
