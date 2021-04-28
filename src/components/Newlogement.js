import {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Pagination} from "antd";
import {MdDelete} from 'react-icons/md'
import {FaEdit, FaWindowClose} from 'react-icons/fa'


class Newlogement extends Component {

        constructor(props){
            super(props)
            this.state = {
                isFavoriteLog:false,
                house : this.props.house,
                cloge :[],
                logPerPage : 3,
                currentPage: 1,               
            }
            this.handledelete.bind(this)
    
        }
        
            componentDidMount() {
                
            axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomList").then(res => {
                const logementInfos = res.data;
                console.log(logementInfos)
              this.setState({ cloge : logementInfos });
              console.log(this.state.cloge)
              }) 
              
            }
            handleSelectChange = e => {
                this.setState({
                  logPerPage: e.target.value,
                  currentPage: 1
                });
              };   

            handleChange = value => {
                this.setState({
                  currentPage: value
                });
              };
            handledelete  = (e,index, id)=>{

                let clogeTemp = this.state.cloge
                 clogeTemp.splice(index, 1)
                 console.log(clogeTemp)
                 this.setState({ cloge : clogeTemp });
                axios.delete("https://mamaison.arenaplaza.site/api/Room/" + id).then(res => {
                console.log(res.data)

                e.preventDefault()
              }) 
       }

    render() { 
        
            
            const {
                currentPage,
                logPerPage,
            }
            = this.state;
            const indexOfLastLog = currentPage * logPerPage;
            const indexOfFirstLog = indexOfLastLog - logPerPage;
        return (         
          <div>

             
                <div className="meslogements">


                {
                    this.state.cloge.slice(this.state.cloge.length - 20,this.state.cloge.length ).slice(indexOfFirstLog, indexOfLastLog).map((item, index) =>{

                        return(
                        <div className="grid__item" key={index}>
                                <div className="card"> 
                                <Link to= {`/Descriptiondelogement/${item.id}`}><img className="card__img" src={"https://res.cloudinary.com/dtklqpfen/image/fetch/h_900/"+ item.roomStateName} alt=""/></Link> 
                                    <div className="card__content">
                                        <h1 className="card__text">Type: {item.roomName}</h1>
                                        <p className="card__text"><strong>Chambre: </strong>{item.livingRoomNumber}</p>
                                        <p className="card__text"><strong>Cuisine: </strong>{item.cookedNumber}</p>
                                        <p className="card__text"><strong>douche: </strong>{item.bedroomNumber}</p>
                                        <p className="card__text"><strong>loyer: </strong>{item.rentCostSS}</p>
                                        <p className="card__text"><strong>Etat: </strong>{/*this.props.Etat*/} </p>
                                        <div className="bout">
                                        <Link to ="" >
                                        <button className="btn btn-success mr-2" onClick = { (e) => this.handledelete (e,index,item.id)}><MdDelete/>supprimer</button>
                                        </Link>
                                        <Link to ="/Ajouterunlogement" > 
                                        <button className="btn btn-success mr-5" type="text"> <FaEdit/>modifier</button> 
                                        </Link>
                                        <img className="favorite" src={ this.state.isFavoriteLog?"/images/ic_favorite.png":"/images/ic_favo.png"} width="50px" onClick={this.handleFavoritelog}  alt=""></img>
                                        </div>
                                </div> 
                            </div>
                        </div>
                        )
                    })
                }           
            </div>
            <div className="pagination-div">
                        <Pagination 
                        defaultCurent={this.state.curentPage}
                        defaultPageSize={this.state.logPerPage}
                        pageSize={this.state.logPerPage}
                        onChange={this.handleChange}
                        total={/*loadingOk && */this.state.cloge.length > 0 && this.state.cloge.length - (this.state.cloge.length - 20 )}/>
                        
                        <div className="pagination">
                        <select value={this.state.logPerPage} onChange={this.handleSelectChange} >
                            <option>4</option>
                            <option>8</option>
                            <option>10</option>
                          </select>
                      </div>
                </div>  
          </div>
            
     )
        
    }
}


  
  export default Newlogement;
  
  