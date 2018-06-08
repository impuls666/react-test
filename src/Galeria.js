import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import OBJEKTY from './Data';



class Objekt extends React.Component {
  render(){
    return(
      <div className="col-md-3">
      <img className='gallery-thumbnail' src={this.props.objekty} />
      <Link to="/test" className='card-icon-open'></Link>
      </div>
    ) 
    }
}

export default class Galeria extends React.Component {
    render()
    {
      return(
        <div className="row">
        <div className="container">     
       {
        OBJEKTY.map((objekt, index)=>{
          return <Objekt objekty={objekt["category-image"]} alt={'Image number ' + (index + 1)} />        
        })
       } 
       </div> 
       </div>
      )
    }
}


