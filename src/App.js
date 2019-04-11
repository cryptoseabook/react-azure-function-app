import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">幸运大抽奖</h1>
          <h3 className="mb-5">
            <em>一个前端ReactJs 后端Servless function 架构的牛逼随机数生成器</em>
          </h3>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">抽字母组</a> 
          <a className="btn btn-primary btn-xl js-scroll-trigger ml-5" href="#about">抽数字组</a>
          <div className="result mt-5">
            <p className="result-letter-group" />
            <p className="result-number-group" />
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
