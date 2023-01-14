import React,{useState} from 'react'
import {LoginWrap,Rightbox,Leftbox,RightTextbox,PasswordInput_Input,Title,Inputrow,NameInput_title,NameInput, NameInput_Input,InputIcon,Sendbtn} from './login';
import email from '../../assets/img/email.svg';
import password from '../../assets/img/password.svg';
import axios from 'axios';
import { useForm } from "react-hook-form";
function Login(){

    const onSubmit = async(data)=>{
        await new Promise((r)=> setTimeout(r,1000));
        console.log(data);
    };

    const LoginFunc = (e) => {
        let body = {
            email:email,
            password:password
        }; 
        axios.post("https://port-0-server-3vw25lc9t3b00.gksl2.cloudtype.app/",body)
        .then((res)=>{
            console.log(res.data);
        })
    }

    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors }, } = useForm();

    return(
        <>
        <LoginWrap>
            <Rightbox>
                <RightTextbox>
                    <Title>Login</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <NameInput>
                        <NameInput_title>email</NameInput_title>
                        <Inputrow>
                        <NameInput_Input aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"} 
                        {...register("email",{
                            required:"이메일은 필수 입력입니다.",
                            pattern:{
                                value: /\S+@\S+\.\S+/,
                                message:"이메일 형식에 맞지 않습니다."
                            },
                        })}
                        />
                        {errors.email && <small role="alert">{errors.email.message}</small>}
                        <InputIcon src={email}></InputIcon>
                        </Inputrow>
                    </NameInput>
                    <NameInput>
                        <NameInput_title>password</NameInput_title>
                        <Inputrow>
                        <PasswordInput_Input {...register("password",{
                            required:"비밀번호는 필수 입력 입니다.",
                            minLength:{
                                value:8,
                                message:"8자리 이상 비밀번호를 사용하세요.",
                            },
                        })}></PasswordInput_Input>
                        {errors.password && <small role="alert">{errors.password.message}</small>}
                        <InputIcon src={password}></InputIcon>
                        </Inputrow>
                    </NameInput>
                    <Sendbtn type="submit" onClick={LoginFunc}>Login</Sendbtn></form>
                </RightTextbox>
            </Rightbox>
            <Leftbox></Leftbox>
            
        </LoginWrap>
        </>
    )
} 
export default Login;