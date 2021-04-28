import React,{Component} from 'react';
import './Addloge.css';
import axios from 'axios'


class AddLogement extends Component {

    constructor(props){
        super(props)
        this.state = {
           
        cloge: {
                roomStateName: "Disponible",
                rentCost: 299984,
                bedroomNumber: 4,
                showerNumber:4,
                cookedNumber:2,
                livingRoomNumber: 3,
                roomName: "Studio3",
                roomCategory: {
                },
                roomDaCreated: "2021-04-15T09:42:31.173Z",
            },
            TabFile: [],       
        }
    }
        handleImage = (e) => {     
            let imageUpload = e.target.files[0]
            this.setState( {TabFile: [ ...this.state.TabFile, imageUpload ]})
        }
        handledelete= (index)=>{
            let TabFiletemp = this.state.TabFile
            TabFiletemp.splice(index, 1)
            this.setState({
            TabFiletemp:this.state.TabFile
   })
}

        
        handleChange = (e) => {
            let clogetemp = this.state.cloge
            clogetemp[e.target.name] = e.target.value
            this.setState({
            cloge: clogetemp
        }) 
    } 
        handleSubmit = (e) =>{
            
            console.log (this.state.TabFile)   
            const formData = new FormData()
            formData.append('file', this.state.TabFile[0])
            formData.append('upload_preset', 'ml_default')

            const option = {
                method : 'POST',
                body : formData,
            };

            axios.post(`https://api.cloudinary.com/v1_1/dtklqpfen/image/upload`, formData)
            .then(res => {
            console.log(res.data);
            let  tempCloge = this.state.cloge
            tempCloge["roomStateName"] =  res.data.url 
             this.addRoom(tempCloge)
             this.setState({
                 cloge: tempCloge
             })
            }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);
        });

        e.preventDefault()
            
        }
     
         addRoom(room) {
            
            axios.post(`https://mamaison.arenaplaza.site/api/Room/CreatedRoom`, room )
            .then(res => {
            console.log(res.data);
          //On traite la reponse obtenue
            }).catch(erreur =>{
              //On traite ici les erreurs éventuellement survenues
              
              console.log(erreur);
          });
        
        }

       

    render() {
        
     return(  
            
            <form onSubmit = {this.handleSubmit}>
                <h2>Remplissez les informations de votre logement:</h2>
                 
                <label className="monlabel"><strong>Type:</strong><select name="roomName"  onChange={this.handleChange} value ={this.state.cloge["roomName"]}>
                <option value ={this.state.cloge["type"] }> Appartement</option>
                <option value ={this.state.cloge["type"]}>VIlla</option>
                <option value ={this.state.cloge["type"]}>Studio</option>
                <option value ={this.state.cloge["type"]}>Chambre</option>
              </select> </label><br/><br/>
                <label className="monlabel"><strong>Nombre de chambre :</strong><input name="bedroomNumber" type="number" min="1" max="10"  onChange={this.handleChange} value ={this.state.cloge["bedroomNumber"]}/> </label><br/><br/>
                <label  className="monlabel"><strong>Nombre de douche :</strong><input name="showerNumber" type="number" min="1" max="5"  onChange={this.handleChange} value ={this.state.cloge["showerNumber"]}/> </label><br/><br/>
                <label  className="monlabel"><strong>Nombre de cuisine :</strong><input name="cookedNumber" type="number" min="1" max="5"  onChange={this.handleChange} value ={this.state.cloge["cookedNumber"]}/> </label><br/><br/>
                <label className="monlabel"><strong>Loyer :</strong><input type="number" name="rentCost" min="1" max="5000000"  onChange={this.handleChange} value ={this.state.cloge["rentCost"]}/> </label><br/><br/>
                <label className="monlabel"><strong>nombre de salon :</strong><input name="livingRoomNumber" type="number"min="1" max="3"  onChange={this.handleChange} value ={this.state.cloge["livingRoomNumber"]}/> </label><br/><br/>
                <label className="monlabel"><strong>Etat </strong><select name="roomStateName"  onChange={this.handleChange} value ={this.state.cloge["roomStateName"]}>
                <option className="monlabel">Occupé</option>
                <option className="monlabel">A veriffier</option>
                <option className="monlabel">Disponible</option>
              </select> </label><br/><br/>
              
                 <label> <h2 className="heading">Ajouter votre image</h2></label>
                     <input name="imageUpload " type="file"  onChange={this.handleImage}  accept ="image/*"   disabled={this.state.TabFile.length === 4}/>
                     {this.state.TabFile.map( (iut, index) => {
                         return(
                        <div className="img-holder" key = {index}> 
                            <img src={URL.createObjectURL(iut)} id="img" className="img" width="200px"  alt=""/> 
                            <img src={URL.createObjectURL(iut)} id="img" className="img" width="200px"  alt=""/> 
                            <button className="btn btn-info btn-md" type="delete" onClick={this.handledelete}>Delete</button>
                        </div>
                    ) })}<br/><br/>
                        
                <button className="btn btn-info btn-md" type="submit" value="Envoyer">Envoyer</button><br/> <br/>

              
            </form>
                
     )
    }
    
}

export default AddLogement;