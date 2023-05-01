import React from 'react';
import banner from "../../shared/assests/images/banner-bgup.png";
export default function ResultSearch() {
  return (
    <div>
         <h2 className='text-center mb-2 mt-2'>وقف المولوي</h2>
         <div className="container">
       <div className="row g-1 my-5">
            <div className="col-sm-12 col-md-6 offset-1">
              <div>
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
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <div>
                <img
                  src={banner}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}
