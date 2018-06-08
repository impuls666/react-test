import React from 'react';


export default class Obrazok extends React.Component {
    render(){
      return(
      <div className="col-md-3">
      <img className='gallery-thumbnail' src={this.props.objekty} alt={this.props.alt} />
      <a href={this.props.url} className='card-icon-open'></a>
      </div>
      )
    }
  }