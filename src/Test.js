import React from 'react';
import './App.css';
import OBJEKTY from './Data';


class Objekt extends React.Component {
  render(){
    return(
    <div className="col-md-3">
    <img className='gallery-thumbnail' src={this.props.objekty}  />
    </div>
    )
  }
}



export default class Test extends React.Component {
    render()
    {
      return(
        <div className="row">
        <div className="container">     
       {
       OBJEKTY.map((objekt, key)=> {         
           return objekt.subimages.map((odkaz)=> {             
              return <Objekt objekty={odkaz}  />
            })
          })     
        } 
       </div> 
       </div>
      )
    }
}


