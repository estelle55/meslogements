import React from 'react'
import AddLogement from './AddLogement'
import Newlogement from './Newlogement'
import App from '../App'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Acceuil from './Acceuil'
import AjoutDescription from './AjoutDescription';
import Login from './User/Login'
import SignUp from './User/SignUp'
import Navbar from './Navbar'
import Footer from './User/footer'
function Main (){
    return(
            <BrowserRouter>
                <Navbar/>
               <Switch>

                <Route exact path="/">
                <Acceuil/>
                </Route>
                <Route path="/Ajouterunlogement">
                <AddLogement/>
                </Route>
                <Route path="/lesLogements">
                <App/>
                </Route>
                <Route path="/Descriptiondelogement/:id"  component={ AjoutDescription}/>
                <Route exact path="/connectezvous">
                <Login/>
                </Route>
                <Route exact path="/inscrivezvous">
                <SignUp/>
                </Route>
                <Route path="/Newlogements">
                <Newlogement/>
                </Route>
                
                </Switch> 
                <Footer/>
            </BrowserRouter>
            
            
       
    )
}


export default Main;