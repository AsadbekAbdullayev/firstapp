import styled from "styled-components"; 
import M1 from '../../../assets/modernbody.png';
import M2 from '../../../assets/modernbody2.png';
export const Container = styled.div`
margin:0px 135px;
display:flex;
justify-content: space-around;
height: 500px;
display:flex;
width:1070px;
justify-content:space-between;


`
Container.MBody1 = styled.div`
height: 100%;
background: url(${M1});
box-sizing:border-box;
width:570px;
background-position:center;

`
Container.MBody12 = styled.div`
height: 100%;
display:flex;
flex-direction:column;
justify-content:space-between;
height:100%;
width:485px;`

Container.MBody2 = styled.div`
background-position:center;
height: 100%;
background: url(${M2});
height:48%;
width:100%;`

Container.BodyTitles = styled.div`
padding:50px 30px;
`

Container.BodyT1 = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
color: #555555;
`


Container.BodyT2 = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
display: flex;
align-items: center;
color: #7AC751;
padding:15px 0;
`



Container.BodyT3 = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
display: flex;
align-items: center;
color: #757575;
`

