import * as s from "./styles"
import MainSrc from "../../assets/MainLogo.png"
import { Link } from "react-router-dom"
import Button from "../../components/@common/Button"
interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  return (
    <s.Wrapper>
      <s.LogoWrapper>
        <s.MainLogo src={MainSrc}/>
      </s.LogoWrapper>
      <s.BtnWrapper>
        <Link to="/my">
          <Button>내 정보</Button>
        </Link>
        <Link to="/signUp">
          <Button>회원가입</Button>
        </Link>
      </s.BtnWrapper>
    </s.Wrapper>
  );
};

export default MainPage;