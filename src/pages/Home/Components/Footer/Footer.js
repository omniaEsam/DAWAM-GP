import { faFaceAngry } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='footer-contant'>
                    <h2>منصة دوام</h2>
                    <div className='col-md-4'>
                    <FontAwesomeIcon icon={fa-Discord} />
                        <FontAwesomeIcon icon={faFaceAngry}/>
                        <FontAwesomeIcon icon={faFaceAngry}/>
                     </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
