import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../config';
import { Anchor, Button,  Form, Input, Log } from './style';

export default function LogIn() {
  return (
    <div className='container' dir="rtl">
    <Form>
       
       <div>
           <FontAwesomeIcon color={theme.gray}  size='2xl' icon={faUser} />
           <Input type="text" placeholder='اسم المستخدم'/>
        </div>
        <div>
           <FontAwesomeIcon  color={theme.gray} size='2xl' icon={faLock} />
           <Input type="password" placeholder='كلمة المرور'/>
        </div>
        <Anchor>
        <Link style={{fontWeight:'bold' }} to ="/log_in">هل نسيت كلمة المرور؟</Link>
        </Anchor>
        <div>
        <Button><Log href='#'>تسجيل الدخول</Log></Button>
        </div>
       
     </Form>
    </div>
  )
}
