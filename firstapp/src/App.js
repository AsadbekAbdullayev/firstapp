import React from 'react';



class App extends React.Component{
  render(){
    console.log(this)
    return(
      <div>
        {this.props.children}
        <h1>HELLO REACT {this.props.name} </h1>
        <h1>HELLO REACT {this.props.id} </h1>
      </div>
    )
  }
}



export default App;


