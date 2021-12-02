import React from 'react';
import './App.css';


class Con extends React.Component{
    render(){

        return (
            <div className='rang'>
            {this.props.children}
            </div>
        )
        }
}

export default Con;


