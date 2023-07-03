import { useLocation} from 'react-router-dom';
import "./Navbar.css" ;
import { NavLink  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [NavBg , setNavbg] = useState('transpernt');
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === "/"){
      setNavbg('transpernt');
    }
    else{
      setNavbg('#005B4B');
    }
  },[location.pathname])
    return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: NavBg}} >
    <div className="container">
      <Link className="navbar-brand" to='/'>
      <Logo height={'6rem'}/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page"  to="/" >الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/AboutPage" >من نحن</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/waqfs" >الأوقاف</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/AdvancedSearch"  >البحث المتقدم</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/contactUs" >تواصل معنا</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
    
  
}
