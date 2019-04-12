import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

const endpoint = "http://localhost:7071/api"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: "",
      number: "",
      load: false
    }
  }
  
  getRandomLabels = async (event) => {
    event.preventDefault()

    console.log(endpoint)
    this.setState({
      load: true
    })
    let response = await axios.get(endpoint + "/getRandomLabel?labelGroup=A-E");
    console.log(response)
    this.setState({
      label: response.data,
      load: false
    })

  }

  getRandomNumbers = async (event) => {
    event.preventDefault()
    this.setState({
      load: true
    })
    let response = await axios.get(endpoint + "/getRandomNumber?totalDigits=1");
    console.log(response)
    this.setState({
      number: response.data,
      load: false
    })
  }

  render() {
    return (
      <div className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">幸运大抽奖</h1>
          <h3 className="mb-5">
            <em>一个前端ReactJs 后端Servless function 架构的牛逼随机数生成器</em>
          </h3>
          <button className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.getRandomLabels}>抽字母组</button> 
          <button className="btn btn-primary btn-xl js-scroll-trigger ml-5" onClick={this.getRandomNumbers} >抽数字组</button>
          {this.state.load ? <div><span className="spinner-border text-light mt-2" role="status" aria-hidden="true"></span><span className="sr-only">Loading...</span></div>:<div></div>}
          <div className="result mt-5">
            <b>幸运组:</b><span className="result-group result-letter-group">{this.state.label}</span>
            <b>幸运数字:</b><span className="result-group result-letter-group">{this.state.number}</span>
          </div>
          <div className="footer mt-5">
            <span style={{color: 'red'}}>♥</span> Built by <a href="https://www.linkedin.com/in/seabookchen/">Seabook Chen</a>@iters.com.au
          </div>
        </div>
      </div>    
    );
  }

  
}

export default App;
