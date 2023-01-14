import React from "react";
import * as _ from "./style"
import {useForm} from "react-hook-form";


const Signup = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
  };

  const onError = (error) => {
    if (error.nickname) alert(error.nickname.message);
    else if (error.email) alert(error.email.message);
    else if (error.password) alert(error.password.message);
    else {
      alert('비밀번호가 맞는지 확인해주세요');
    }
  };


    return(
        <>
        <_.SignupContainer>
            <_.LeftLogo></_.LeftLogo>

            <_.SignupWrap>
                <_.SignupInHeader>SIGNUP</_.SignupInHeader>
                <_.SignupForm onSubmit={handleSubmit(onSubmit, onError)}>
                    <_.InputAllWrap>
                        <_.InputWrap>
                            <div>nickname</div>
                            <_.Input
                            name="name"
                            {...register('name', { required: 'name' })}
                            />
                        </_.InputWrap>
                        <_.InputWrap>
                            <div>email</div>
                            <_.Input
                            name="email"
                            {...register('email', { required: 'email' })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </_.InputWrap>
                        <_.InputWrap>
                            <div>password</div>
                            <_.Input
                            type="password"
                            name="password"
                            {...register('password', {
                                required: '비밀번호를 입력해주세요',
                                minLength: {
                                    value: 8,
                                    message: '최소 8자 이상의 비밀번호를 입력해주세요',
                                },
                            })}
                            />
                        </_.InputWrap>
                    </_.InputAllWrap>
                    {errors.password && <p>{errors.password.message}</p>}
                    <_.SignupBtn>SIGN UP</_.SignupBtn>
                </_.SignupForm>
    
            </_.SignupWrap>
        </_.SignupContainer>
        </>
    )
}

export default Signup