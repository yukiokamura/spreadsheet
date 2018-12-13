import React from 'react';
import ReactDOM from 'react-dom';

import JsonController from './Model/JsonController.es6';
window.gb = {
  url:'https://script.googleusercontent.com/macros/echo?user_content_key=HaDPUMwvLc3ornP5uOUXD_t60iX2J-mpJEeje5i9M1igJwUl46LyEVKlj5hvitPUz30DzZZJlQKzIIdg7GHYBe7OkVSpBUCBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLeqTlpgPQi1lp1LJDqwh80tliTAbliD_Wr1r1lEOj_6-MYoKaq-9YJiMy9UurguIuIqWsDnSrEd&lib=MDnKWLMLfQKz8mb5O6vTgrN7kxc8_R_uc'
}

import Loading from './Component/loading.jsx';
import Graph from './Component/graph.jsx';


export default class MainView extends React.Component{
  constructor(){
    super();
    this.state = ({
      entry: [],
      isloading:true
    });

  }
  componentDidMount(){
    const j = new JsonController(gb.url);
    j.getJson().then(
      e=>{
        this.setState({
          entry:JSON.parse(e),
          isloading:false
        })
      }
    )
  }
  render() {
    return (
      <div className="nameList">
        <div className="alist">
          {this.state.entry.map(item=>{
            return <a href={item.link} key={item.id}>{item.name}</a>
          })}
        </div>
        <Graph data={this.state.entry} />
        <Loading isActive={this.state.isloading} />

      </div>
    );
  }
}

ReactDOM.render(<MainView/>, document.querySelector('#app'));
