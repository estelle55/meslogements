import {Component} from 'react';
import axios from 'axios'


class AjoutDescription extends Component {

    constructor(state){
        super(state)
        this.state = {
            cloge: {

        }
      }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        console.log(this.props)
        axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id).then(res => {
            const logementInfos = res.data;
            console.log(logementInfos)
          this.setState({ cloge : logementInfos });
          }) 
        }

        
 render() { 
     return (
         
        <div className="descrip">
            <div className="grid__item">
                <div className="card"> 
           <img src={this.state.cloge.roomStateName} alt="" width="300"  className="card__img"></img>
           <div className="card__content">
                <p className="card__text"><strong>Type: </strong>{this.state.cloge.roomName}</p>
                <p className="card__text"><strong>Chambre: </strong>{this.state.cloge.bedroomNumber}</p>
                <p className="card__text"><strong>Cuisine: </strong>{this.state.cloge.cookedNumber}</p>
                <p className="card__text"><strong>douche: </strong>{this.state.cloge.showerNumber}</p>
                <p className="card__text"><strong>loyer: </strong>{this.state.cloge.rentCost}</p>
                <p className="card__text"><strong>Etat: </strong>{this.state.cloge.roomStateName}</p>
                <p className="card__text"><strong>salon: </strong>{this.state.cloge.livingRoomNumber}</p>
               
                <img src="" onClick="handleClick" alt=""></img>
            </div>
            </div>
            </div>
            
        </div>
     )
        
    }
}



export default AjoutDescription;