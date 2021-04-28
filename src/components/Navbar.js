
import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './Acceuil.css'

function Navbar (){

    return(
        <nav className="navbar navbar-expand-lg navStyle">           
        <h1 className="white">Housing. </h1>          
        <button className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
            <span><i className="fas fa-align-right iconStyle"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto navList">
                  
                <li className="nav-item active"><Link to ="/" className="nav-link"> <i className="fas fa-home"></i>Acceuil<span className="sr-only">(current)</span> </Link></li>
                <li className="nav-item">
                    <Link to ="/inscrivezvous" className="nav-link"> SingUp</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/connectezvous" className="nav-link" > Login </Link>
                </li>
            </ul>
        </div>
    </nav>
        )
    }
    
    
    
    export default Navbar;
