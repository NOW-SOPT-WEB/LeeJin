import * as s from './styles'

const Card = ({item: {id, url}, clickedId, setClickedId}) => {
  return (
    <s.CardContainer>
        <s.CardImg src={url}/>
    </s.CardContainer>
  );
};

export default Card;