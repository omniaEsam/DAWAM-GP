import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { dataSearchOne, dataSearchTwo } from './DataSearch'
 
import "./Search.css"
export default function Search() {
  return (
    <div id='search ' className='my-5'>
      <div className='search-head text-center pb-5' >
        <h2 className='title'>تصفح الأوقاف</h2>
        <FontAwesomeIcon size='lg'  icon={faSearch} className="search-icon" />
        <input className='form-control  m-auto w-50 my-4 rounded-pill form-control-search'/>
      </div>
      
      <div className='container'>
        <div className='row'>
          {
            dataSearchOne.map((item)=>{
              return(
                <div className='col-md-3' key={item.id}>
                <div className='search-cards '>
                  <img src={item.image} className='w-100' alt=""/>
                  <div className='card-boder'>
                  <h3 className='py-2 fs-6'>  {item.title} </h3>
                  <p className='desc-serch'>{item.description}</p>
                  <button className='btn btn-lg btn-green w-100'>المزيد</button>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {
            dataSearchTwo.map((item)=>{
              return(
                <div className='col-md-3' key={item.id}>
                <div className='search-cards mt-5'>
                  <img src={item.image} className='w-100' alt=""/>
                  <div className='card-boder'>
                  <h3 className='py-2 fs-6'>  {item.title} </h3>
                  <p className='desc-serch'>{item.description}</p>
                  <button className='btn btn-lg btn-green w-100'>المزيد</button>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
