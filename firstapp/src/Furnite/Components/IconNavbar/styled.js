import styled from "styled-components"; 
import {ReactComponent as Sovga} from '../../../assets/sovga.svg';
export const Container = styled.div`
height: 70px;
margin:20px 135px;
display:flex;
justify-content: space-around;
width:1160px;
`

Container.Icon = styled(Sovga)`
width:60px;
color: #7AC751;
height:60px;
`

Container.Icons = styled.div`
height:70px;
display:flex;
flex:1;
 `
Container.IconTitle = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
padding:0 0 0 10px

    `   
Container.IconT1 = styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
display: flex;
align-items: center;
color: #555555;
    `

    Container.IconT2 = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(81, 81, 81, 0.71);
    `