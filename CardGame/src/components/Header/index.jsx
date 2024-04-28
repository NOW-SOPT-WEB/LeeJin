import * as s from './styles'

const Header = ({matchingCnt, entireCnt}) => {
  return (
    <s.HeaderContainer>
      <s.TitleContiner>
        <s.Title>League of Legends 맞추기</s.Title>
        <s.resetBtn>RESET</s.resetBtn>
      </s.TitleContiner>
      <s.Subtitle>{matchingCnt}/{entireCnt}</s.Subtitle>
    </s.HeaderContainer>
  );
};

export default Header;