import * as s from "./styles"
import * as ss from "../SignupPage/styles"
import logoSrc from "../../assets/LoginLogo.png"
import loginSrc from "../../assets/LoginImg.jpeg"
import Button from "../../components/@common/Button";
import { Link } from "react-router-dom";

interface LoginPageProps { }

const LoginPage = ({ }: LoginPageProps) => {
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
        <ss.ListInput/>
      </ss.List>
      <ss.List>
        <ss.ListTitle>PW</ss.ListTitle>
        <ss.ListInput/>
      </ss.List>
      <ss.BtnWrapper>
        <Button>로그인</Button>
        <Link to="/signUp">
          <Button>회원가입</Button>
        </Link>
      </ss.BtnWrapper>
    </ss.Wrapper>
  );
};

export default LoginPage;