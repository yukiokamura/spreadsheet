import React from 'react';
import ReactDOM from 'react-dom';

export default class loading extends React.Component{
  render(){
    if(this.props.isActive){
      return (
        <div className="loading_wrapper">
          <div className="loading"></div>
        </div>
      )
    }else{
      return null;
    }
  }
}
