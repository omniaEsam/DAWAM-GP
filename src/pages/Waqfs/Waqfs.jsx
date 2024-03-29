import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Components/Navbar/Navbar'
import axios from 'axios';
import { Link} from 'react-router-dom';
import './Waqfs.css'
import Footer from '../Home/Components/Footer/Footer';
export default function Waqfs(){

  const [result , setResult ] = useState([]);
  
   const search= async()=>{
     const respond = await axios.get(`http://afdinc-001-site5.itempurl.com/api/waqf`);
    setResult(respond.data);
   }
  
  useEffect(()=>{
      search();
  },[]);
  const fetchResult = result.map((item)=>{
      return(
        
                <div className='col-md-12' key={item.id}>
                <div className='waqf-cards mb-4 d-flex rounded shadow '>
                  <div className='ms-4  w-25 '>
                  <img src={"http://afdinc-001-site5.itempurl.com"+item.imageUrl} className='w-100 ' alt=""/>
                  </div>
                  <div className='ps-5' >
                  <h3 className='pt-4 pb-2 fs-5 fw-bold'>  {item.waqfName} </h3>
                  <p className='desc-search fs-5'>{item.waqfDescription.split('').slice(0 , 105).join('')}</p>
                  <Link className="btn btn-green m-3" to={`/ResultSearch/${item.id}`} role="button">المزيد</Link>              
                  </div>
                </div>
              </div>
      )
      });
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row my-5'>
        {fetchResult}
        </div>
      </div>
      <Footer/>

    </div>
  )
  }
  