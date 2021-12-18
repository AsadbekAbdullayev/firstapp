import styled from 'styled-components'
const getsiza = ({type})=>{
switch (type){
case 'large' :return '300px';
case 'medium' :return '200px';
case 'small' :return '150px';
default :return '100px';
}
};


export const Box = styled.div`
width:${(props)=>getsiza(props)};
height:${(props)=>getsiza(props)};
background-color:rgba(17, 69, 26,.5);
margin:10px;
`