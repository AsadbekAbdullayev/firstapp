import React from "react";
import './App.css';



 class Student extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            count:0,
        name:'',
        firstname:'',
        data : [
            {
                id:1,name:'Asadbek'
            }, {
                id:2,name:'Axadbek'
            }, {
                id:3,name:'Asadbekjon'
            }, {
                id:4,name:'Alijon'
            }
        ]
        }
    }

    


     render(){
    
        const on =(e)=>{
            const data2 = this.state.data.push({
                id:this.state.data.length+1,name:e.target.value
            })

        this.setState({

            data:data2
        })
        }
        const on1 =(e)=>{
            // const data1 = this.state.data.filter((v)=>v.id!==e)
            // this.setState({

            //     data:data1
 
            // })
            }
        
         return(
             <div>
                <h1>Name: {this.state.name}</h1>  
                {
                    this.state.data.map((v)=>{

               
                        return(
                      <h1> {v.id} {v.name} <button className='btn' onClick={()=>on1(v.id)} >delete </button> </h1>  
                        )
                    })
                }

                <input type='tex'placeholder='name kiriting' name='name' onChange={on} value={this.state.name}/>               
                <input type='tex'placeholder='firstname kiriting' name="firstname" onChange={on} value={this.state.firstname}/>               
             </div>
         )
     }
     }

 export default Student;








 