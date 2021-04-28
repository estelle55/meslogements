import React, { Component } from 'react'
import axios from 'axios'
import {FaLock, FaKey, FaUserTie, FaUserAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

 class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
        user: {
            userLogin: "",
            userPassWord: "",
            agentName: "",
            agentEmail: "",
            image: "",
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
     
            axios.post(`https://mamaison.arenaplaza.site/api/User/CreatedUser`, this.state.user)
            .then(res => {
            console.log(res.data);
            }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);})

            


            console.log(this.state.user)  
            e.preventDefault()

        
        }
    
    render() {
        return (         
                <div className="forms">
                 <div className="container">
                     <div className="row">
                         <h1><FaLock/>SignUp</h1>                  
                     </div><br /><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaUserTie/></span>
                        </div>
                             <input type="text" name="userLogin" className="form-control" placeholder="Username" onChange={this.handleChange}/>
                    </div><br />
                     <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaKey/></span>
                        </div>
                            <input type="Password" name="userPassword" className="form-control" placeholder="Password" onChange={this.handleChange}/>
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaUserAlt/></span>
                        </div>
                            <input type="text" name="agentName" className="form-control" placeholder="Votre non complet" onChange={this.handleChange}/>
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FiMail/></span>
                        </div>
                            <input type="text" name="agentEmail" className="form-control" placeholder="Adresse  mail" onChange={this.handleChange}/>
                    </div><br />
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/> Remember me</label>
                    </div><br />
                    <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Send</button> <br/> <br/>
                 </div>                 
             </div>
        )
    }
}


export default Signup;