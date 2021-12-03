import React from 'react';
import './App.css';


class Con extends React.Component{
    render(){

        return (
            <div className='card'>
            {this.props.rasm}
            {this.props.tex}
            {this.props.children}
            </div>
        )
        }
}



export default Con;


