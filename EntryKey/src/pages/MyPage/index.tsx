import * as ss from "../SignupPage/styles"
import * as s from "./styles"
import logoSrc from "../../assets/MypageLogo.png"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getUserDataAPI, passwordAPI } from "../../axios/api";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from "../../components/@common/Button";

const MyPage = () => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [togglePW, setTogglePW] = useState(false);
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setNewPasswordVerification] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const memberId: any = searchParams.get('userId');
  const navigate = useNavigate();

  getUserDataAPI({ memberId })
    .then((response) => {
      console.log({ response })
      setId(response.authenticationId);
      setNickname(response.nickname);
      setPhone(response.phone);
    })
  const handlePrevPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviousPassword(e.target.value);
  };
  const handleNewPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleNewPwVerif = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPasswordVerification(e.target.value);
  };
  const handlePwSubmit = () => {
    if (previousPassword === "") {
      alert("기존 비밀번호를 입력해주세요.")
    } else if (newPassword === "") {
      alert("새로운 비밀번호를 입력해주세요.")
    } else if (newPasswordVerification === "") {
      alert("새로운 비밀번호 확인을 입력해주세요.")
    } else {
      passwordAPI({ previousPassword, newPassword, newPasswordVerification, memberId })
        .then(() => {
          alert("비밀번호 변경이 완료되었습니다.");
          navigate("/");
        });
    }
  };
  return (
    <ss.Wrapper>
      <ss.LogoWrapper style={{ marginTop: "2rem" }}>
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

      <s.PwWrapper>
        <s.PwTitleWrapper>
          <s.PwTitle>비밀번호 변경</s.PwTitle>
          {togglePW
            ? <FontAwesomeIcon icon={faAngleUp} onClick={() => setTogglePW(false)} style={{ cursor: "pointer" }} />
            : <FontAwesomeIcon icon={faAngleDown} onClick={() => setTogglePW(true)} style={{ cursor: "pointer" }} />
          }
        </s.PwTitleWrapper>
        <s.ToggleWrapper isVisible={togglePW}>
          <ss.List>
            <s.PwListTitle>기존 비밀번호</s.PwListTitle>
            <ss.ListInput onChange={handlePrevPw} />
          </ss.List>
          <ss.List>
            <s.PwListTitle>새로운 비밀번호</s.PwListTitle>
            <ss.ListInput onChange={handleNewPw} />
          </ss.List>
          <ss.List>
            <s.PwListTitle>비밀번호 확인</s.PwListTitle>
            <ss.ListInput onChange={handleNewPwVerif} />
          </ss.List>
          <ss.BtnWrapper style={{ marginTop: "2rem" }}>
            <Button onClick={handlePwSubmit}>비밀번호 변경</Button>
          </ss.BtnWrapper>
        </s.ToggleWrapper>
      </s.PwWrapper>
      <ss.BtnWrapper style={{ marginTop: "2rem" }}>
        <Link to="/">
          <Button>홈으로</Button>
        </Link>
      </ss.BtnWrapper>
    </ss.Wrapper>
  );
};

export default MyPage;