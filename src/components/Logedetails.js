import {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



class logedetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            isFavoriteLog:false,
            house : this.props.house,
        }
       
    
    }

         handleFavoritelog=() =>{
            this.setState({
              isFavoriteLog: !this.state.isFavoriteLog
            });
            const action = { type: "TOGGLE_FAVORITE", value: this.props.house };
            this.props.dispatch(action);
          }

            //  handlechangeimg =(e) =>{
                    //     let reponse = /ic_favo.png/.test(e.target.src)
                    // if(reponse == true){
                    //     e.target.src = "/images/ic_favorite.png"   
                    // }else{
                    //     e.target.src = "/images/ic_favo.png"   
                    // }
                    //  }
                            // let src =  e.target.src
                // if(src=="http://localhost:3000/images/ic_favo.png"){
                //     e.target.src= "http://localhost:3000/images/ic_favorite.png"
                // }if(src=="http://localhost:3000/images/ic_favorite.png"){
                //     e.target.src= "http://localhost:3000/images/ic_favo.png"
                // }else{
                    
                // }
    
    
 render() { 
   

     return (
      
         <div >
            <div className="total">
        

            <div className="grid__item">
            <div className="card"> <Link to= {`/Descriptiondelogement/${this.props.id}`}><img className="card__img" src={"https://res.cloudinary.com/dtklqpfen/image/fetch/h_900/"+ this.props.image} alt=""/></Link> 
            <div className="card__content">
                <h1 className="card__text">Type: {this.props.Type}</h1>
                <p className="card__text">Chambre: {this.props.Chambres}</p>
                <p className="card__text">Cuisine: {this.props.Cuisine}</p>
                <p className="card__text">douche: {this.props.Douches}</p>
                <p className="card__text">loyer: {this.props.loyer}</p>
                <p className="card__text">Etat: {/*this.props.Etat*/} <img className="favorit" src={ this.state.isFavoriteLog?"/images/ic_favorite.png":"/images/ic_favo.png"} width="50px" align="center" onClick={this.handleFavoritelog}  alt=""></img></p>
                

            </div>
            </div>
            </div>
            </div>
        </div>
     )
        
    }
}

const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };
  
  export default connect(mapStateToProps)(logedetail);
  
  