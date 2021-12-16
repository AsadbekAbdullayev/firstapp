import React from 'react'
import './Student.css'


class Student extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active:null,
            selected :true,
            search:'',
            searchname:'name',
            count:0,
            name:'',
            age:'',
            job:'',
            newdata:[],
             data : [

        { id:1, name:'Asadbek',age:21,job:'Programmer'},
        { id:2, name:'Bobur',age:31,job:'worker'},
        { id:3, name:'Sardor',age:27,job:'Senior developer'},
        { id:4, name:'Jamshid',age:35,job:'Middle developer'},
        { id:5, name:'Asqar',age:45,job:'Junior developer'},
        
    ]
        }
    }
    render(){
   const onEdit =(e)=>{
       this.setState({
        name:'',
        age:'',
        job:'',
        active:
            e.id
        })
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
const onchange1=(e)=>{

    this.setState( {
        [e.target.name]:e.target.value})

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
        // name:'',
        // age:'',
        // job:'',
      
    })
    
}
    
const onSave =(v)=>{
    const news={
        id:v.id,
        name:this.state.name,
        job:this.state.job,
        age:this.state.age
    }
    const c = [...this.state.data.filter((e)=>e.id!==v.id),news]
    c.sort((a,s)=>a.id-s.id)
    this.setState({
        data:c,
        active:null,
      
    })
}
// Search =================================================================================
const onSearch =()=>{
    
  let nd = this.state.data.filter((v)=>v[this.state.searchname].toString().toLowerCase().includes(this.state.search))
  this.setState({
      newdata:nd,
      selected:false
  })
console.log(this.state.newdata);
    

}
const onk = (e)=>{

    this.setState({searchname:e.target.value})

    console.log(this.state.searchname);


}
const onsell = (e)=>{

    this.setState({
        search:e.target.value
    })


}


        return( 
            <div>
                
                    <div  className='card1' >
                     

                    <tr>

    <th> <input type='text' placeholder='name' name='name' className='inp'    onChange={onchange} /></th>
    <th><input type='text' name='age' placeholder='age' className='inp'onChange={onchange}  /></th>
    <th><input type='text' name='job' placeholder='job' className='inp'onChange={onchange} /></th>
    <th><button  className='btna'  onClick={onAdd}>Add </button></th>

  </tr>

                    </div>          
                    <div  className='card1' >
                     

                     <tr>
                     <select onChange={onk} className="cars">
  <option value='' >...</option>
  <option value="name" >name</option>
  <option value="age" >age</option>
  <option value="job" >job</option>

</select>

     <th> <input type='text' placeholder='name' name='name' className='inp'    onChange={onsell} /></th>
     <th>{this.state.selected ? <button  className='btna'  onClick={onSearch}>Search </button> :<> <button  className='btna'  onClick={onSearch}>Search </button>  <button  className='btnd'  onClick={()=>this.setState({selected:true})}>Censel </button></>}</th>
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
                 this.state.selected ? this.state.data.map((v)=>{
                        return(
                            
                                <tr className='tr'>
    <td>{v.id} </td>

    <td>{ this.state.active===v.id ?  <input type='text' placeholder='name' name='name' value={this.state.name} className='inp'  onChange={onchange1}  />: `${v.name}` }</td>
    <td>{ this.state.active===v.id ?  <input type='text' placeholder='age' name='age' className='inp'onChange={onchange1}  />: `${v.age}` }</td>
    <td> { this.state.active===v.id ?  <input type='text' placeholder='job' name='job' className='inp'onChange={onchange1} />: `${v.job}` }</td>
    <td><button  onClick={()=>onDelete(v.id)} className='btnd'>DELETE</button></td>
    <td>{this.state.active===v.id ? <> <button onClick={()=>onSave(v)} className='btn'>SAVE</button> <button className='btn' onClick={cancel}  >Cancel</button></>:<button className='btn' onClick={()=>onEdit(v)} >EDIT</button> }</td> 
   
  </tr>
      )
                    }):


                    this.state.newdata.map((v)=>{
                        return(
                            
                                <tr className='tr'>
    <td>{v.id} </td>

    <td>{ this.state.active===v.id ?  <input type='text' placeholder='name' name='name' value={this.state.name} className='inp'  onChange={onchange1}  />: `${v.name}` }</td>
    <td>{ this.state.active===v.id ?  <input type='text' placeholder='age' name='age' className='inp'onChange={onchange1}  />: `${v.age}` }</td>
    <td> { this.state.active===v.id ?  <input type='text' placeholder='job' name='job' className='inp'onChange={onchange1} />: `${v.job}` }</td>
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

