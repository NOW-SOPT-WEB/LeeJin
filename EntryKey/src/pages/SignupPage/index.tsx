import * as s from "./styles"
import logoSrc from "../../assets/SignupLogo.png"
import Button from "../../components/@common/Button";
import { useState } from "react";
import { signupAPI } from "../../axios/api";
import { Link, useNavigate } from "react-router-dom";
interface SignupPageProps {}

const SignupPage = ({}: SignupPageProps) => {
  const [authenticationId, setAuthenticationId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationId(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleSubmit = () => {
    signupAPI({authenticationId, password, nickname, phone}).then(() => navigate("/"));
  };
  return (
    <s.Wrapper>
      <s.LogoWrapper>
        <s.LogoImg src={logoSrc}/>
      </s.LogoWrapper>
      <s.List>
        <s.ListTitle>ID</s.ListTitle>
        <s.ListInput onChange={handleId}/>
      </s.List>
      <s.List>
        <s.ListTitle>비밀번호</s.ListTitle>
        <s.ListInput onChange={handlePw}/>
      </s.List>
      <s.SubTitle>비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</s.SubTitle>
      <s.List>
        <s.ListTitle>닉네임</s.ListTitle>
        <s.ListInput onChange={handleNickname}/>
      </s.List>
      <s.List>
        <s.ListTitle>전화번호</s.ListTitle>
        <s.ListInput onChange={handlePhone}/>
      </s.List>
      <s.SubTitle>전화번호 형식은 010-****-****입니다.</s.SubTitle>
      <s.BtnWrapper>
        <Button onClick={handleSubmit}>회원가입</Button>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </s.BtnWrapper>
    </s.Wrapper>
  );
};

export default SignupPage;