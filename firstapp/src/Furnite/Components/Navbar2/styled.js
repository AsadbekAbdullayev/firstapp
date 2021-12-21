import styled from "styled-components";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as Search } from "../../../assets/search.svg";
import { ReactComponent as Qun } from "../../../assets/qun.svg";
import { ReactComponent as User } from "../../../assets/user.svg";
import { ReactComponent as Shop } from "../../../assets/Shop.svg";

export const Container = styled.div`
margin:15px 135px;
height:70px;
display:flex;
align-items:center;

`
Container.IconLogo = styled.div`
font-style: normal;font-family: sans-serif;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #555555;
height:60px;
display:flex;
align-items:center;
margin:0 50px 0 0;

`
Container.IconLogos = styled(Logo)`
width:40px;
height:40px;
`
Container.Icon = styled.div`
display:flex;
height:50px;
align-items:center;
margin-left:auto;
`
Container.Icon1 = styled(Search)`
width: 24px;
height: 24px;
bacground-color:#FFF;
`
Container.Icon2 = styled(Shop)`
width: 27px;
height: 27px;
margin:0 10px;

`
Container.Icon3 = styled(Qun)`
width: 24px;
margin:0 10px;

height: 24px;
`
Container.Icon4 = styled(User)`
width: 24px;
margin:0 10px;
height: 24px;
`
Container.Search = styled.div`
width: 582px;
height: 46px;
border: 2px solid #7AC751;
box-sizing: border-box;
border-radius: 8px;

`