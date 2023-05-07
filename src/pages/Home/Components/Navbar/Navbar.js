import { useLocation} from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css" ;
import { NavLink ,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [NavBg , setNavbg] = useState('transpernt');
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === "/"){
      setNavbg('transpernt');
    }
    else{
      setNavbg('#005b4b');
    }
  },[location.pathname])
    return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: NavBg}}>
    <div className="container">
    <Link className="navbar-brand" to="/">
     دوام  
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page"  to="/" activeClassName="active">الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/AboutPage" activeClassName="active">من نحن</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/waqfs" activeClassName="active">الأوقاف</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/search" activeClassName="active" >البحث المتقدم</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/contactUs" activeClassName="active">تواصل معنا</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
    
  
}
