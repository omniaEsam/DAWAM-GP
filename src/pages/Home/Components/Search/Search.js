import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Search.css";
import { Link } from 'react-router-dom';

export default function Search() {
  const  [term , setTerm ] = useState('');
  const  [result , setResult ] = useState([]);

  useEffect(()=>{
    const search= async()=>{
     const respond = await axios.get('http://afdinc-001-site5.itempurl.com/api/waqf',{
      params: {
        action:'query',
        list: 'search' ,
        origin: '*' ,
        format: 'json' ,
        srsearch: 'term'
       },
     });
     setResult(respond.data);
   
    };
    if(term){
      search();
    }
  },[term]);

  const fetchResult = result.map((item)=>{
      return(
                <div className='col-md-3' key={item.id}>
                <div className='search-cards '>
                  <img src={"http://afdinc-001-site5.itempurl.com"+item.imageUrl} className='w-100 ' alt=""/>
                  <div className='card-border'>
                  <h3 className='py-2 fs-6'>  {item.waqfName} </h3>
                  <p className='desc-search'>{item.waqfDescription.split('').slice(0 , 105).join('')}</p>
                  <Link className="btn  btn-lg btn-green  w-100" to="/ResultSearch" role="button" >المزيد</Link>
                  </div>
                </div>
              </div>
      )
  })
  return (
    <div id='search' className='my-5'>
      <div className='search-head text-center pb-5' >
        <h2 className='search-title'>تصفح الأوقاف</h2>
        <FontAwesomeIcon size='lg'  icon={faSearch} className="search-icon" />
        <input className='form-control  m-auto w-50 my-4 rounded-pill '
        onChange={(e)=> setTerm(e.target.value)} value={term}/>
      </div>
      <div className='container'>
        <div className='row'>
        {fetchResult}
        </div>
      </div>
     
      {/* <div className='container'>
        <div className='row'>
          {
            dataSearchTwo.map((item)=>{
              return(
                <div className='col-md-3' key={item.id}>
                <div className='search-cards mt-5'>
                  <img src={item.image} className='w-100' alt=""/>
                  <div className='card-border'>
                  <h3 className='py-2 fs-6'>  {item.title} </h3>
                  <p className='desc-search'>{item.description}</p>
                  <button className='btn btn-lg btn-green w-100'>المزيد</button>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div> */}
    </div>
  )
}
