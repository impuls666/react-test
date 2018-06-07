import React from 'react';
import './App.css';



let objekty = [
  {
    'category' : 'zvierata',
    'category-image' : 'https://source.unsplash.com/3Z70SDuYs5g/800x600',
    'sub-images' : [
    {"filename":'https://source.unsplash.com/01vFmYAOqQ0/800x600'},
    {"filename":'https://source.unsplash.com/01vFmYAOqQ0/800x600'},
    {"filename":'https://source.unsplash.com/01vFmYAOqQ0/800x600'},
    {"filename":'https://source.unsplash.com/01vFmYAOqQ0/800x600'},
    ]
  } 
]




class Objekt extends React.Component {
  render(){
    return(
      <div className="col-md-3">
      <img className='gallery-thumbnail' src={this.props.objekty} alt={this.props.alt} />    
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
  /*           console.log(objekt["sub-images"]["0"]["filename"]); */
          return  <Objekt objekty={objekt["sub-images"][index]["filename"]} alt={'Image number ' + (index + 1)} />         
        })
       } 
       </div> 
       </div>
      )
    }
}


