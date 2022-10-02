import React from 'react';
import './Navbar.css';
import image from '../../images/image.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
// import './styles.css';


    const NavBar= () =>{
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark" >   
        {/* style={{backgroundColor: 'blue'}} */}
          <a className="navbar-brand" href="#"  style={{display:'inline-flex'}}>
          <img src={image} style={{margin:'20px', width:'50px',height:'50px'}} />
          <h2 className='my-auto'>MyMemories</h2>   
          {/* adds margin to top and bottom */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto px-5 ">
              
              <li className="nav-item">
                <a className="nav-link" style={{color:'grey'}} href=" ">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:'grey'}}href="">
                  Sign Up
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      )
};
export default NavBar;