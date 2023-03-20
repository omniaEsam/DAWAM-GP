import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./log_in.css"
export default function Log_in() {
  return (
   <div className='text-center  form rounded-4'>
     <div className='d-flex'>
     <FontAwesomeIcon size='lg'  icon={faUser}  className="icon"/>
     <input className='form-control mb-4 rounded-4' type="text" placeholder='اسم المستخدم'/>
     </div>
     <div className='d-flex'>
     <FontAwesomeIcon size='lg'  icon={faLock}  className="icon"/>
     <input className='form-control rounded-4' type="password" placeholder='كلمة المرور'/>
     </div>
     <div className="anchor" ><a style={{fontWeight:'bold' }} href ="/log_in">هل نسيت كلمة المرور؟</a></div>
     <button className='btn  btn-green w-100 rounded-pill'>تسجيل الدخول</button>

   </div>
  )
}
