import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './Acceuil.css'

function Acceuil (){
   
    return(
        
            <div>
            
            <div>
                <span className="mot">bienvenue sur </span>
                <img className="Image" src="https://res.cloudinary.com/dtklqpfen/image/fetch/v1618994714/https://res.cloudinary.com/dtklqpfen/image/upload/v1619526601/dnrxpxbeipesenzvhour.jpg" alt="hello world"></img>
            </div>
            <div>
            
            <Link to ="/lesLogements" className="nav-link" > <i className="fas fa-briefcase"></i>Visiter les logements </Link>
            <Link to ="/Ajouterunlogement" className="nav-link" > <i className="fas fa-briefcase"></i>Ajouter un logement </Link>
            </div>
          </div>
 
    )
}



export default Acceuil;