import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ResultSearch() {

    const  [result , setResult ] = useState([]);
  
    useEffect(()=>{
      const resultSearch = async()=>{
       const respond = await axios.get('http://afdinc-001-site5.itempurl.com/api/waqf',{
        params: {
          action:'query',
          list: 'search' ,
          origin: '*' ,
          format: 'json' 
         
         },
       });
       setResult(respond.data);
     
      };
      
        resultSearch();
      
    },[result]);

    const fetchSearchResult = result.map((item)=>{
      return(
                <div key={item.id}>
              <h2 className='text-center mb-5 '> {item.waqfName}</h2>
            <div className="col-sm-12 col-md-6 offset-1">
                <ul>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold"> إسم الواقف: </span>
                    {item.founderName}                  
                    </li>
                    <li className='pb-2 fs-4'>
                    <span className="fw-bold">تاريخ الوقف هجريا:</span>
                     {item.establishmentDateH}
                  </li>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold">تاريخ الوقف ميلاديا:</span>
                    {item.establishmentDate}
                  </li>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold">نوع الوقف:</span>
                     {item.waqfType}
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold">تصنيف الوقف :</span>
                      {item.waqfActivity}
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold"> ريع الوقف :</span>
                     {item.waqfCountry}-{item.waqfCity}
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold">وصف الوقف :</span>
                      {item.waqfDescription}
                  </li>
                  </ul>
              </div>
              <div className="col-sm-12 col-md-5">
              <div>
                <img
                  src={"http://afdinc-001-site5.itempurl.com"+item.imageUrl}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
              </div>
      )
  })
  return (
    <div>
        
         <div className="container">
       <div className="row g-1 my-5">
       {/* <h2 className='text-center mb-5 '>وقف المولوي</h2>
            <div className="col-sm-12 col-md-6 offset-1">
                <ul>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold"> إسم الواقف: </span>
                      أبو المظهر شعبان  
                  </li>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold">تاريخ الوقف هجريا:</span>
                    0700-01-01T00:00:00"
                  </li>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold">تاريخ الوقف ميلاديا:</span>
                    1300-01-01T00:00:00
                  </li>
                  <li className='pb-2 fs-4'>
                    <span className="fw-bold">نوع الوقف:</span>
                      خيري
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold">تصنيف الوقف :</span>
                      مصحف
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold"> ريع الوقف :</span>
                      القاهرة-مصر
                  </li>
                  <li className='pb-2 fs-3'>
                    <span className="fw-bold">وصف الوقف :</span>
                    الجزء الأول من المصحف الكريم لينتفع به المسلمين سائر وجوه الانتفاعات الشرعية شرط أن يكون مقره بالمدرسة المعروفة بخط التبانة

                  </li>
                </ul>
                </div> */}
            {/* <div className="col-sm-12 col-md-5">
              <div>
                <img
                  src={banner}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div> */}
            {fetchSearchResult}
          </div>
          </div>
    </div>
  )
}
