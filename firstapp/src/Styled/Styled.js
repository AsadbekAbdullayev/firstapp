import styled from 'styled-components'
import {ReactComponent as Logo} from '../assets/s1.svg'

export const Wraplogo = styled.div`
width:100px;
height:100px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);
border: 2px solid red;
box-sizing: border-box;
border-radius: 8px;
`
Wraplogo.Logo = styled.div`
font-weight:600;
font-size:24px;
color:#555;
`
Wraplogo.Logo = styled(Logo)









// 
export const Wrapper = styled.div`
width:330px;
height:550px;
margin:50px auto;
border-radius:10px;
position:relative;

`
export const Title = styled.div`
font-size:30px;
font-weight:800;
color:#fff;
`
export const Title1 = styled.div`
color:rgb(27, 27, 29);
font-size:20px;
font-weight:800;
`


export const Wraphead = styled.div`
width:100%;
height:50%;
background-color:rgb(70, 99, 224);

display:flex;
padding:30px;
aligin-item:center;
box-sizing:border-box;

`
export const Wrapbody = styled.div`
padding:30px;
box-sizing:border-box;
width:100%;
display:flex;
flex-direction: column;
justify-content: start;
height:50%;
border-radius:30px 30px 0px 0px;
background-color:whitesmoke;
position:absolute;
top:100px;
box-shadow: 0 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
export const Them = styled.div`
width:100%;
padding-top:20px;
display:flex;

`
export const InputWrap = styled.div`
display:flex;
flex-direction: column;
width:100%;
height: 100%;


`
export const Input = styled.input`
width:100%;
border:none;
outline:none;
border-radius:10px;
height: 40px;
margin-top:20px;
padding:10px;
box-sizing:border-box;
background-color:rgb(146, 150, 151);
`
export const Btn = styled.button`
width:70px;
height:30px;
color:white;
font-size:14px;
font-weight:600px;
border-radius:10px;
border:none;
outline:none;
margin-left:auto;
background-color:rgb(45, 67, 128);
`


