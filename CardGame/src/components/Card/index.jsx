import { useState } from 'react';
import * as s from './styles'
import ReactCardFlip from "react-card-flip";
import defaultImg from "../../assets/cardDefault.jpeg"

const Card = ({item: {id, url}, clickedId, setClickedId}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(prev => !prev);
    if (clickedId == -1) {
        setClickedId(id);
    } else {
        if (clickedId === id) {
            console.log("정답입니다")
        } else {
            console.log("오답입니다");
            isFlipped(prev => !prev);
        }
        setClickedId(-1);
    }
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <s.CardImg onClick={handleClick} src={defaultImg}/>
        <s.CardImg onClick={handleClick} src={url}/>
    </ReactCardFlip>
  );
};

export default Card;