import React from 'react'
import './App.css'


class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            name:'',
            lastname:'',
            btn:'',
            edit:true,
             deta : [
        { id:1, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:2, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:3, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:4, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:5, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:6, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:7, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:8, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'},
        { id:9, name:'Asadbek',age:21,addres:'Shahrisabz',nickname:'Bek',univ:'TDTU',job:'Programmer'}
        
    ]
        }
    }
    render(){
        // let on =(e)=>{
        //  this.setState({
        //      name:e.target.value
        //  })

        // }

        // let on2 =(e)=>{
        //     const ND = {
        //         id:this.state.deta.length + 1,
        //         name:this.state.name
        //     }
        //  this.setState({
        //        deta:[
        //            ...this.state.deta,
        //            ND
        //        ]
        //  })

        // }

        let on1 =(e)=>{
            const res = this.state.deta.filter((v)=> v.id!==e )
            this.setState({
               deta:res
            })
        }

       
        

        return(
            <div>
                {/* <div>
           <input type='text' name='name' className='inp' onChange={on}/> <button onClick={on2} >Add </button>
                </div> */}

                <table className='custom'>
                  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>ADDRES</th>
    <th>NICKNAME</th>
    <th>UNIV</th>
    <th>JOB</th>
    <th>DELETE</th>
    <th>EDIT</th>
  </tr>
  
                {
                    this.state.deta.map((v)=>{
                        return(
                            
                                <tr className='tr'>
    <td>{v.id}</td>
    <td>{v.name}</td>
    <td>{v.age}</td>
    <td>{v.addres}</td>
    <td>{v.nickname}</td>
    <td>{v.univ}</td>
    <td>{v.job}</td>
    <td><button onClick={()=>on1(v.id)} className='btnd'>DELETE</button></td>
    <td><button className='btn'  >EDIT</button></td> 
   
  </tr>

                            
               

                        )
                    })
                }
                </table>

            </div>
        )
    }
}

export default Student;

