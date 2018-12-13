import React from 'react';
import ReactDOM from 'react-dom';

export default class Graph extends React.Component{
  render(){
    return (
      <div className="graph_wrap">
        {this.props.data.map(item=>{
          return <div className="graph" key={item.id}>{item.value}</div>
        })}
      </div>
    )
  }
}
