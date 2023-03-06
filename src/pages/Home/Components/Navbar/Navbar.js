import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import links from './Links';
import "./Navbar.css" ;

export default function Navbar() {
    const items = links();
    const route = useLocation();
  return (
    <div>
    <nav className="navbar navbar-expand-lg .bg-transparent">
  <div className="container">
<Link className="navbar-brand" to="#">دوام</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent" >
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     {
    items.map((item ,index)=>{
      return(
        <li className="nav-item" key={index}>
        <Link  className="nav-link " aria-current="page" 
        style={{color:route.pathname===item.navLink ? "#D3A355" : "white" , borderBottom:route.pathname===item.navLink ? `2px solid #D3A355` : ""}}
         to={item.navLink}>{item.navText}</Link>
        </li>
      )
    })
  }
  </ul>
</div>
</div>
</nav>
</div>
  )
    
  
}
