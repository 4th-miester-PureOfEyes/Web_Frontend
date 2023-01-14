import styled from 'styled-components';

export const LoginWrap = styled.div`
width:100%;
height:100%;
background-color: #ffffff;
display: flex;
flex-direction: row;
`

export const Rightbox = styled.div`
width:56%;
height:100vh;
background-color: #FFFFFF;
`
export const RightTextbox = styled.div`
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin:100px;
padding-top: 15%;
flex-direction: column;
`
export const NameInput = styled.div`
margin-top:10%;
`
export const NameInput_Input = styled.input.attrs(props=>({
    id:"email",
    type:"email",
    name:"email"
}))`
width:370px;
height:30px;
border-style: none;
&:focus {
    outline: none;
    }
`
export const PasswordInput_Input = styled.input.attrs(props=>({
    id:"password",
    type:"password",
    name:"password"
}))`
width:370px;
height:30px;
border-style: none;
&:focus {
    outline: none;
    }
`
export const NameInput_title = styled.div`
color:#BBBCBD;
font-size: 1.2em;
display: flex;
margin-bottom:10px;
`

export const InputIcon = styled.img`
width:30px;
height:30px;
`
export const Inputrow = styled.div`
display: flex;
flex-direction: row;
border-width: 0px 0px 2px 0px;
border-style: solid;
color:#BBBCBD;
width:400px;
`
export const Title = styled.div`
font-size: 2em;
font-weight: 600;
color: #EA7589;
display: flex;
justify-content: center;
`
export const Leftbox = styled.div`
width:44%;
height:100vh;
background-color: #FFDBDB;
`
export const Sendbtn = styled.button.attrs(props=>({
    type:"submit"
}))`
margin-top:15%;
width:400px;
height:50px;
font-size: 1.2em;
border-radius: 50px;
background-color: #D9D9D9;
color:white;
display: flex;
align-items: center;
justify-content: center;
border-style: none;
`