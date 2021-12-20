import React from 'react'
import {Wrapper,Wraphead,Wrapbody,Title,Them,Title1,InputWrap,Input,Btn} from '../Styled/Styled'

class Login extends React.Component{
    render(){
        return(
            <Wrapper>
            <Wraphead>
            <Title>Welcome Back</Title>
            </Wraphead>
            

            <Wrapbody>
                <Them>
                <Title1>
                    Login
                </Title1>
                </Them>
                <InputWrap>
               < Input/>
               < Input/>
                </InputWrap>
                <Them>
                <Title1>
                    Need help?
                </Title1>
                <Btn> Sign up</Btn>
                </Them>

            </Wrapbody>

            </Wrapper>
        )
    }
}
export default Login