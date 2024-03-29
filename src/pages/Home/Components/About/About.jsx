import React from 'react'
import { Link } from 'react-router-dom';
import AboutImage from "../../../../shared/assests/images/About-logo.jpeg";
import "./About.css"

export default function About() {
  return (
    <div className='about-contant' id="About">
      <div className="container">
        <div className='row'>
          <div className='col-lg-4 col-md-6 offset-1'>
            <img className='rounded w-100' src={AboutImage} alt="logo" />
          </div>
          <div className='col-lg-7 col-md-5'>
            <div className='description '>
              <p className='p-sm-5 p-md-0 p-lg-5 '>عبر العهود الأسلامية أنشأت أوقاف خلدها التاريخ حققت مقاصدها عبر العصور
                و ما خطه الرحالة وكاتبي السير أرشدنا إلى روائع لم تكن بالحسبان
                ففي اوج حضارتنا خصص وقف لكل حاجة ومطلب  وكان  لنا وراء كل وقف
                قصة يدلنا عليها الواقف والدافع والجهة الموقوف عليها والوقف و وثيقة
                وغيره
              </p>
              <div className='button'>
                <Link className="btn  btn-lg btn-green " to="/AboutPage" role="button" >المزيد</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
