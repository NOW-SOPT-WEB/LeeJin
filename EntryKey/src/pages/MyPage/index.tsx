import * as ss from "../SignupPage/styles"
import * as s from "./styles"
import logoSrc from "../../assets/MypageLogo.png"
import { useSearchParams } from "react-router-dom";
import { getUserDataAPI } from "../../axios/api";
import { useEffect, useState } from "react";
interface MyPageProps { }

const MyPage = ({ }: MyPageProps) => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const memberId: any = searchParams.get('userId');

  useEffect(() => {
    getUserDataAPI({ memberId })
      .then((response) => {
        console.log({ response })
        setId(response.authenticationId);
        setNickname(response.nickname);
        setPhone(response.phone);
      })
  }, [memberId]);
  return (
    <ss.Wrapper>
      <ss.LogoWrapper>
        <ss.LogoImg src={logoSrc} />
      </ss.LogoWrapper>
      <s.ListWrapper>
        <s.List>
          <ss.ListTitle>ID</ss.ListTitle>
          <s.ListData>{id}</s.ListData>
        </s.List>
        <s.List>
          <ss.ListTitle>닉네임</ss.ListTitle>
          <s.ListData>{nickname}</s.ListData>
        </s.List>
        <s.List>
          <ss.ListTitle>전화번호</ss.ListTitle>
          <s.ListData>{phone}</s.ListData>
        </s.List>
      </s.ListWrapper>
    </ss.Wrapper>
  );
};

export default MyPage;