import React from 'react'
import './Login.css'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
          sel:true
        }
      }
    render(){
        const on =()=>{
            this.setState({sel:!this.state.sel})
        }
        return(

            <div>{
                this.state.sel ?  <div className='card2'>
                <h1 className='hh'>Welcome to Login</h1>
                <p className='tt'>Sign in to your account</p>
          
                   <div>
                       <p className='pt'>Name</p>
                   <input className='inp2' type='password'/>

                   </div>

                   <div>
                       <p className='pt'>Password</p>
                   <input className='inp2' type='password'/>

                   </div>
                   <div className='df'>
                        <input  className='cc' type='checkbox'/> <p className='ttp'>Remember me</p>
                   </div>
                   <button className='btnr' onClick={on}>To Register</button>
                  

           </div> : <div className='card2'>
                     <h1 className='hh'>Register</h1>
                     <p className='tt'>Sign in to your account</p>
               
                        <div>
                            <p className='pt'>Firstname</p>
                        <input className='inp2' type='tex'/>

                        </div>

                        <div>
                            <p className='pt'>Nickname</p>
                        <input className='inp2' type='tex'/>

                        </div>
                        <div>
                            <p className='pt'>Password</p>
                        <input className='inp2' type='password'/>

                        </div>
                       
                        <button className='btnr' onClick={on}>To Login</button>
                       

                </div>
                
                }

                
            </div>
        )

    }
}
export default Login;