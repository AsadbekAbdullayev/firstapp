import React from "react";

 class Student extends React.Component{
     constructor(props){
         super(props)
             this.state={
                count:0,
                name:'',
                surname:''
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
    const in1 = (e)=>{
       
        this.setState({
            [e.target.name]:e.target.value
        })
        

    }
    
         
         return(
             <div className='card'>
                 <h1 onClick={add1}>-</h1>
                 <h1>COUNT :{this.state.count}  </h1>
                 <h1>NAME :{this.state.name}  </h1>
                 <h1>SURNMAE :{this.state.surname}  </h1>
                 <h1 onClick={add2}>+</h1>
                <input name='name' type='text' placeholder= 'name' onChange={in1} value={this.state.name}/>
                <input name='surname' type='text' placeholder= 'surname' onChange={in1} value={this.state.surname}/>
             </div>
         )
     }
 }
 export default Student;








 