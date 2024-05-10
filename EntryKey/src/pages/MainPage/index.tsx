import * as s from "./styles"
import MainSrc from "../../assets/MainLogo.png"
import { Link, useSearchParams } from "react-router-dom"
import Button from "../../components/@common/Button"
interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  console.log({userId})
  return (
    <s.Wrapper>
      <s.LogoWrapper>
        <s.MainLogo src={MainSrc}/>
      </s.LogoWrapper>
      <s.BtnWrapper>
        <Link to={`/my?userId=${userId}`}>
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