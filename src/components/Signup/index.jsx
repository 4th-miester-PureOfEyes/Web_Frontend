import React from "react";
import * as _ from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useNavigate();

  const params = {
    email: "s210242@gsm.hs.kr",
    password: "injoo123@",
    name: "시훈입니다",
  }
  const frm = new FormData();
//   frm.append("signupRequest", {
//     email: "s210242@gsm.hs.kr",
//     password: "injoo123@",
//     name: "시훈입니다",
//   });
  frm.append("signupRequest", new Blob([JSON.stringify(params)], {type: "application/json"}))
  const onSubmit = async (data) => {
    await axios
      .post(
        "https://port-0-server-3vw25lc9t3b00.gksl2.cloudtype.app/auth/signup",
        frm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        // 모든 유호성 검사가 true 라면
        console.log(res);
        if (res.data.validation) {
          // 발급 받은 유저 정보 (토큰 등등)를 로컬스토리지에 담아준다.
          window.localStorage.setItem(
            "signupResponseData",
            JSON.stringify(res.data)
          );
          // 회원가입 완료 페이지로 이동 시켜준다.
          router("/join/complete");
        }
      });
  };
  const onError = (error) => {
    if (error.nickname) alert(error.nickname.message);
    else if (error.email) alert(error.email.message);
    else if (error.password) alert(error.password.message);
    else {
      alert("비밀번호가 맞는지 확인해주세요");
    }
  };

  return (
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
                  {...register("name", { required: "name" })}
                />
              </_.InputWrap>
              <_.InputWrap>
                <div>email</div>
                <_.Input
                  name="email"
                  {...register("email", { required: "email" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </_.InputWrap>
              <_.InputWrap>
                <div>password</div>
                <_.Input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                    minLength: {
                      value: 8,
                      message: "최소 8자 이상의 비밀번호를 입력해주세요",
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
  );
};

export default Signup;
