import styled from "styled-components";
import Fur from '../../../assets/kf.svg'
import S from '../../../assets/s1.svg'

export const Container = styled.div`
height: 454px;
margin:0px 135px;
display:flex;
align-items:center;
`
Container.SecBody = styled.div`
width: 260px;
height: 454px;
background: #F7F8FA;
`
Container.SecBodyTitle = styled.div`
display:flex;
align-items:center;
font-family: sanf-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.02em;
color: #555555;
height:45px;
width: 260px;
padding:0 0 0 40px;
border-bottom: 0.8px solid #E3E3E3;
`

export const Body1 = styled.div`
width: 899px;
height: 439px;
background: linear-gradient(103.4deg, rgba(241, 250, 255, 0.88) 0.89%, #F1FAFF 101.61%);
backdrop-filter: blur(155px);
border-radius: 1px;
border:10px solid #fff;
display:flex;
align-items:center;
`
Body1.Titless = styled.div`
padding:0 0 0 10px;
width: 318px;
height:100%;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
`
Body1.Title1 = styled.div` 
padding:10px 20px;
font-family: sanf-serif;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.05em;
color: #7AC751;
`

Body1.Title2 = styled.div`   
padding:10px 20px;
font-family: sanf-serif;
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 47px;
color: #2F2F2F;
padding:30px 0;
`
Body1.Title3 = styled.div`
font-family: sanf-serif;
padding:10px 10px;
font-style: normal;
padding:10px 20px;
font-weight: 600;
font-size: 27px;
line-height: 26px;
color: rgba(81, 81, 81, 0.71);
`
Body1.TitleBtn = styled.button`
width: 129px;
height: 40px;
padding:10px 10px;
left: 453px;
top: 508px;
background: #7AC751;
border-radius: 5px;
font-family: sanf-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
outline:none;
border:none;
`
Body1.BigImg = styled.div` 
width: 324px;
height: 324px;
box-sizing:border-box;
padding:10px;
background: url(${Fur});
padding:0 0 0 10px;


`
Body1.Imgs = styled.div` 
margin:0 0 0 30px;
width: 98px;
height: 324px;
box-sizing: border-box;
display:flex; 
 flex-direction: column;
justify-content:space-between
`
Body1.Img = styled.div` 
background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);
border: 2px solid #fff;
box-sizing: border-box;
border-radius: 8px;
width: 98px;
height: 91.47px;
display:flex; 
 flex-direction: column;
 align-items:center;

`
Body1.ImgeP = styled.div`
font-family: sanf-serif;
font-style: normal;
font-weight: 500;
font-size: 17px;
display: flex;
align-items: center;
color: #7AC751;
`
Body1.Imge = styled.div`
width: 50px;
background-repeat:no-repeat;
 height: 50px;
box-sizing:border-box;
background: url(${S});
`

Body1.ImgT = styled.div`
font-family: sanf-serif;
font-style: normal;
font-weight: 500;
font-size: 7px;
display: flex;
align-items: center;
color: #555555;
`


