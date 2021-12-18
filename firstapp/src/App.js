import React from 'react';
import {Box} from './Styled/Styled'
import './App.css'


class App extends React.Component{

  render(){
return( 
<div style={{display:'flex'}}>
  <Box type='large'/>
  <Box type='medium'/>
  <Box type='small'/>
 
 </div>)
  }
}

export default App;
