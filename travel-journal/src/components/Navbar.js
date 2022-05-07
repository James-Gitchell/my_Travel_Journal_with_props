import React from "react"

export default function Navbar(){
    return(
       <nav>
         <div className="nav--container">
        <img src="https://cdn-icons-png.flaticon.com/512/2798/2798097.png" 
             alt="icon-pic"
             className="nav--img"/>
             
          <h4 className="nav--text">my travel journal.</h4>
          </div>
       </nav>
    ) 
}