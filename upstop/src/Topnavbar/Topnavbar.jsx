import React from 'react';
import './Topnavbar.css';




const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <ul>
                <li><a href="#home">Assessment</a></li>
                <li><a href="#about">My Assessments</a></li>

              
            </ul>
        </nav>
       <div className="content">
        <div className="box">

        </div>
       </div>
      
        </>
    );
};

export default Navbar;

