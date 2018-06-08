import React from 'react';
import './App.css';
import OBJEKTY from './Data';
import Obrazok from './Obrazok';


export default class Galeria extends React.Component {
    render()
    {
      return(
        <div className="row">
        <div className="container">     
       {
        OBJEKTY.map((objekt, index)=>{
          return (            
          <div>
          <Obrazok objekty={objekt["category-image"]} index={index} url={objekt["url"]} alt={'Image number ' + (index + 1)} />     
          </div>
          );
        })
       } 
       </div> 
       </div>
      )
    }
}


