import React from 'react'
import './App.css'


class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active:null,
            count:0,
            name:'',
            age:'',
            job:'',
             data : [

        { id:1, name:'Asadbek',age:21,job:'Programmer'},
        { id:2, name:'Asadbek',age:21,job:'Programmer'},
        { id:3, name:'Asadbek',age:21,job:'Programmer'}
        
    ]
        }
    }
    render(){
   const onEdit =(e)=>{
       this.setState({active:e})
   }

   const cancel =()=>{
    this.setState({active:null})
}
const onDelete =(e)=>{
    this.setState({data:this.state.data.filter((v)=> v.id!==e)
    })
}
const onchange=(e)=>{
    this.setState({[e.target.name]:e.target.value})

}
const onAdd =()=>{
    const nd ={
        id:this.state.data.length + 1,
        name:this.state.name,
        age:this.state.age,
        job:this.state.job
    }

    this.setState({
        data:[
            ...this.state.data,
            nd
        ],
    })
    
}
    
const onSave =(v)=>{
    const news={
        id:v.id,
        name:this.state.name,
        job:this.state.job,
        age:this.state.age
    }
    
    this.setState({
        data:[...this.state.data.filter((e)=>e.id!==v.id),news],
        active:null,
        name:'',
        age:'',
        job:'',
    })
}

        return( 
            <div>
                
                    <div  className='card1' >
                     

                    <tr>

    <th> <input type='text' placeholder='name' name='name' className='inp' onChange={onchange} /></th>
    <th><input type='text' name='age' placeholder='age' className='inp'onChange={onchange} /></th>
    <th><input type='text' name='job' placeholder='job' className='inp'onChange={onchange} /></th>
    <th><button  className='btna'  onClick={onAdd}>Add </button></th>
  </tr>

                    </div>          

                <div  className='card' >



                <table className='custom'>
                  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>JOB</th>
    <th>DELETE</th>
    <th>EDIT</th>
  </tr>
  
                {
                    this.state.data.map((v)=>{
                        return(
                            
                                <tr className='tr'>
    <td>{v.id} </td>

    <td>{ this.state.active===v.id ?  <input type='text' placeholder='name' name='name' className='inp'  onChange={onchange}  />: `${v.name}` }</td>
    <td>{ this.state.active===v.id ?  <input type='text' placeholder='age' name='age' className='inp'onChange={onchange}  />: `${v.age}` }</td>
    <td> { this.state.active===v.id ?  <input type='text' placeholder='job' name='job' className='inp'onChange={onchange} />: `${v.job}` }</td>
    <td><button  onClick={()=>onDelete(v.id)} className='btnd'>DELETE</button></td>
    <td>{this.state.active===v.id ? <> <button onClick={()=>onSave(v)} className='btn'>SAVE</button> <button className='btn' onClick={cancel}  >Cancel</button></>:<button className='btn' onClick={()=>onEdit(v.id)} >EDIT</button> }</td> 
   
  </tr>

                            
               

                        )
                    })
                }
                </table>
                </div>
            </div>
        )
    }
}

export default Student;

