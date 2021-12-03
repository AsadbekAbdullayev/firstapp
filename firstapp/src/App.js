import React from 'react';
import './App.css'
import Student from './Farzand'



class App extends React.Component{
  render(){
    console.log(this)
    return(
    	<div className='container'>
    	<Student/>
    	</div>
    	
    )
  }
}



export default App;


