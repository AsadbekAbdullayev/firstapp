import React from "react";

 class Student extends React.Component{
     constructor(props){
         super(props)
             this.state={
                count:0
             }
        
     }
     render(){
     const add1 = ()=>{
         this.setState({
             count:this.state.count -1
         })
     }
     const add2 = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
         
         return(
             <div className='card'>
                 <h1 onClick={add1}>-</h1>
                 <h1>{this.state.count}</h1>
                 <h1 onClick={add2}>+</h1>
             </div>
         )
     }
 }
 export default Student;