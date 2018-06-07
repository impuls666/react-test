import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';



let objekty = [
  {
    'category' : 'zvierata',
    'category-image' : 'https://source.unsplash.com/3Z70SDuYs5g/800x600',
    'sub-images' : {
      '0':'https://source.unsplash.com/01vFmYAOqQ0/800x600',
      '1':'https://source.unsplash.com/01vFmYAOqQ0/800x600',
      '2':'https://source.unsplash.com/01vFmYAOqQ0/800x600',
      '3':'https://source.unsplash.com/01vFmYAOqQ0/800x600',
    }
  } 
]




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
        objekty.map((objekt, index)=>{
          return <Objekt objekty={objekt["category-image"]} alt={'Image number ' + (index + 1)} />        
        })
       } 
       </div> 
       </div>
      )
    }
}


