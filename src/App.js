import React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

// routes
import Galeria from './Galeria'
import Test from './Test'

export default class App extends React.Component {
    render()
    {
    return(
    <BrowserRouter>
    <div>   
      <Route exact path='/' component={Galeria}/>
      <Route exact path='/test' component={Test}/>  
    </div>   
    </BrowserRouter>
    )
    }
}
  
  