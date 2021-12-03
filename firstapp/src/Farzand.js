import React from 'react';
import Con from './Container'
import './App.css'


class Student extends React.Component{
    render(){

        return (
            
          
      <div className='card'>

          <div className='logo'>{this.props.logo}</div>
          <div className='text'>{this.props.text}</div>
          <button className='btn'>See Story</button>
	
       </div>


            
        )
        }
}

export default Student;


