import * as s from './styles'

const Card = ({item: {id, url}, clickedId, setClickedId}) => {
  const handleClick = () => {
    if (clickedId == -1) {
        setClickedId(id);
    } else {
        clickedId === id ? console.log("정답입니다") : console.log("오답입니다")
        setClickedId(-1);
    }
  }
  return (
    <s.CardContainer onClick={handleClick}>
        <s.CardImg src={url}/>
    </s.CardContainer>
  );
};

export default Card;