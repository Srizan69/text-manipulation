 import React from 'react';
 import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{backgroundColor:'#ced4da'}}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">{props.title}</a> */}
    <Link className='navbar-brand' to="/"><img src="favicon-32x32.png" alt="logo"/>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="AboutUs">{props.about}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    <div className={`form-check form-switch backgrou text-${props.mode==='white'?'#2b2f32':'white'}`}>
      <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" aria-checked="false" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='#adb5bd'?'black':'white'}}>{props.darkmodeswitch}</label>
    </div>
    </div>
  </div>
</nav>
  );
}
