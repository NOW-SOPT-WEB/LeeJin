import * as ss from "../SignupPage/styles"
import logoSrc from "../../assets/MypageLogo.png"
import { useSearchParams } from "react-router-dom";
interface MyPageProps { }

const MyPage = ({ }: MyPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  console.log("안녕", {userId})
  return(
    <ss.Wrapper>
      <ss.LogoWrapper>
        <ss.LogoImg src={logoSrc}/>
      </ss.LogoWrapper>
    </ss.Wrapper>
  );
};

export default MyPage;