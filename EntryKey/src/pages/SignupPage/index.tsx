import * as s from "./styles"
import logoSrc from "../../assets/SignupLogo.png"
import Button from "../../components/@common/Button";
import { useState } from "react";
import { loginAPI } from "../../axios/api";
interface SignupPageProps {}

const SignupPage = ({}: SignupPageProps) => {
  const [authenticationId, setAuthenticationId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
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
    loginAPI({authenticationId, password, nickname, phone});
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
      <s.List>
        <s.ListTitle>닉네임</s.ListTitle>
        <s.ListInput onChange={handleNickname}/>
      </s.List>
      <s.List>
        <s.ListTitle>전화번호</s.ListTitle>
        <s.ListInput onChange={handlePhone}/>
      </s.List>
      <s.BtnWrapper>
        <Button onClick={handleSubmit}>회원가입</Button>
        <Button>뒤로가기</Button>
      </s.BtnWrapper>
    </s.Wrapper>
  );
};

export default SignupPage;