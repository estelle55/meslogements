import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaLock, FaKey, FaUserTie} from 'react-icons/fa'

 class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
            userLogin:"",
            userPassword:"",
            }
          
          
        }}
        handleChange = (e) => {
            let usertemp = this.state.user
            usertemp[e.target.name] = e.target.value
            this.setState({
            user: usertemp
        }) 
    } 

    handleSubmit = (e) =>{
      
        e.preventDefault()
        axios.post(`https://mamaison.arenaplaza.site/api/User/Authentificate`, this.state.user)
        .then(res => {
           
            localStorage.setItem('token', res.data.userTokeng)
            const userToken = localStorage.getItem('token')
            console.log(userToken)
      
        }).catch(erreur =>{
        //On traite ici les erreurs éventuellement survenues
        alert("serveur indisponible")
        console.log(erreur);

        e.preventDefault()
    
        
    });    
    }
    render() {
        return (
            <div className="forms">
                 

                <div className="container">
                    <div className="row">
                        <h1><FaLock/>Login</h1>                  
                    </div><br /><br />
                         <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaUserTie/></span>
                            </div>
                            <input type="text" name="userLogin" className="form-control" placeholder="username or email" onChange={this.handleChange}/>
                        </div><br />
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FaKey/></span>
                            </div>
                        <input type="Password" name="userPassword" className="form-control" placeholder="password" onChange={this.handleChange}/>
                    </div><br />
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/> Remember me</label>
                            </div><br />
                            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}><span className="glyphicon glyphicon-off"></span> Login</button>
                    <div className="footer">
                            <p>Don't have an Account!  <Link to ="/inscrivezvous" className="nav-link"> Sing Up Here</Link> </p>
                    </div>

                </div>
                
            </div>
        )
    }
}


export default Login;