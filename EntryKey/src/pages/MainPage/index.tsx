import * as s from "./styles"
import MainSrc from "../../assets/MainLogo.png"
import { Link } from "react-router-dom"
interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  return (
    <s.Wrapper>
      <s.LogoWrapper>
        <s.MainLogo src={MainSrc}/>
      </s.LogoWrapper>
      <s.BtnWrapper>
        <Link to="/my">
          <s.Btn>내 정보</s.Btn>
        </Link>
        <Link to="/signUp">
          <s.Btn>회원가입</s.Btn>
        </Link>
      </s.BtnWrapper>
    </s.Wrapper>
  );
};

export default MainPage;