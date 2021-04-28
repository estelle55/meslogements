
import './App.css';
import Meslogements from './components/Meslogements'
import React, { Component } from 'react'
import "antd/dist/antd.css";
import {Pagination} from "antd";
import loge from "./components/Datas"
import axios from 'axios'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      logPerPage : 3,
      currentPage: 1,
      loge: loge
    }
  }
  handleChange = value => {
    this.setState({
      currentPage: value
    });
  };

handleSelectChange = e => {
    this.setState({
      logPerPage: e.target.value,
      currentPage: 1
    });
  };   

  componentDidMount() {
    axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
      .then(res => {
        const listLogement = res.data;
        console.log(listLogement)
        this.setState({ loge: listLogement });
      })
      .catch(erreur=> {
          //On traite les erreurs eventuellement disponible
          
          //console.log(erreur)
      })
  }

  render() {
    const {
      currentPage,
      logPerPage,
      loge
    } = this.state;

    const indexOfLastLog = currentPage * logPerPage;
    const indexOfFirstLog = indexOfLastLog - logPerPage;

    return(
      <div>
          
          <div className="meslogements">
           
            <Meslogements loge={this.state.loge.slice(this.state.loge.length - 20,this.state.loge.length ).slice(indexOfFirstLog, indexOfLastLog)}/>
          </div>

          <div className="pagination-div">
            <Pagination 
            defaultCurent={this.state.curentPage}
            defaultPageSize={this.state.logPerPage}
            pageSize={this.state.logPerPage}
            onChange={this.handleChange}
            total={/*loadingOk && */loge.length > 0 && loge.length - (loge.length - 20 )}/>
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

export default App;
