import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
    <div id="sidebar">
        <ul>
            <li><a href="#section1"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/dashboard-layout.png" alt="dashboard-layout"/><br />Dashboard</a></li>
            <li><a href="#section2"><img width="50" height="50" src="https://img.icons8.com/ios/50/edit-text-file.png" alt="edit-text-file"/><br /> Assignment</a></li>
            <li><a href="#section3"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/library.png" alt="library"/><br />My Library </a></li>
            <li><a href="#section4">Section 4</a></li>
            <hr class="dotted" /> 
            <div class="btnn">
            <button class="btn">Admin</button>
        </div>
        </ul>

     
      
     
    </div>
    
     
    
 

);

    export default Sidebar;
    