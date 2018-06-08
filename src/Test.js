import React from 'react';
import './App.css';
import OBJEKTY from './Data';
import Obrazok from './Obrazok';




export default class Test extends React.Component {
    render()
    {
      return(
        <div className="row">
        <div className="container">     
       {
       OBJEKTY.map((objekt)=> {         
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


