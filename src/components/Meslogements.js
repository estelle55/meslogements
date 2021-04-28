
import Logedetails from './Logedetails'
import React,{Component} from 'react';
import {connect} from 'react-redux';


class logement extends Component {
 

 render() { 
    console.log(this.props)

          return(           
            (this.props.loge.map(function(data) {
                return <Logedetails house ={data} id={data.id} image= {data.roomStateName} Type={data.roomName} Chambres={data.bedroomNumber} Cuisine={data.cookedNumber} Douches={data.showerNumber} loyer={data.rentCost} salon ={data.livingRoomNumber} Etat ={data.roomStateName}/>
            }))     
            )
          }

}

const mapStateToProps = state => {
  return {
    favoritesLog:state.favoritesLog
  };
};

export default connect(mapStateToProps)(logement);

