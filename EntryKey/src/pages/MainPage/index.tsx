import * as s from "./styles"
import MainVideo from "../../assets/love.mp4"
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
        <video controls autoPlay loop muted>
          <source src={MainVideo} type="video/mp4"/>
        </video>
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