import * as s from "./styles"
import * as ss from "../SignupPage/styles"
import logoSrc from "../../assets/LoginLogo.png"
import loginSrc from "../../assets/LoginImg.jpeg"
import Button from "../../components/@common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginAPI } from "../../axios/api";

const LoginPage = () => {
  const [authenticationId, setAuthenticationId] = useState("");
  const [isId, setIsId] = useState(true);
  const [password, setPassword] = useState("");
  const [isPw, setIsPw] = useState(true);

  const navigate = useNavigate();
  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationId(e.target.value);
  };
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (authenticationId === "") setIsId(false);
    else setIsId(true);

    if (password === "") setIsPw(false);
    else setIsPw(true);
    
    if (authenticationId !== "" && password !== "") {
      loginAPI({ authenticationId, password })
        .then((response) => {
          navigate(`/main?userId=${response.headers.location}`)
        });
    }
  };

  return (
    <ss.Wrapper>
      <ss.LogoWrapper>
        <ss.LogoImg src={logoSrc} />
      </ss.LogoWrapper>
      <s.ImgWrapper>
        <ss.LogoImg src={loginSrc} />
      </s.ImgWrapper>
      <ss.List>
        <ss.ListTitle>ID</ss.ListTitle>
        <ss.ListInput onChange={handleId} />
      </ss.List>
      <ss.SubList>
        <ss.SubEmpty/>
        {!isId && <ss.SubTitle>ID를 입력해주세요.</ss.SubTitle>}
      </ss.SubList>
      <ss.List>
        <ss.ListTitle>PW</ss.ListTitle>
        <ss.ListInput onChange={handlePw} />
      </ss.List>
      <ss.SubList>
        <ss.SubEmpty/>
        {!isPw && <ss.SubTitle>PW를 입력해주세요.</ss.SubTitle>}
      </ss.SubList>
      <ss.BtnWrapper>
        <Button onClick={handleSubmit}>로그인</Button>
        <Link to="/signUp">
          <Button>회원가입</Button>
        </Link>
      </ss.BtnWrapper>
    </ss.Wrapper>
  );
};

export default LoginPage;