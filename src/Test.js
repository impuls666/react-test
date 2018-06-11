import React from 'react';
import './App.css';
import OBJEKTY from './Data';
import Obrazok from './Obrazok';




export default class Test extends React.Component {
    render()
    {
      var pici =  OBJEKTY.filter((objekt)=> {         
        return objekt.url === this.props.match.params.categoryName;                           
      })   
      console.log(this.props.match.params.categoryName);
      return(
        <div className="row">
        <div className="container">
        {     
               pici.map((objekt)=> {         
                return objekt.subimages.map((odkaz, index)=> {             
                   return <Obrazok objekty={odkaz} alt={'Image number ' + (index + 1)} />
                 })
               })  
        }          
       </div>    
       </div>
      )
    }
}
