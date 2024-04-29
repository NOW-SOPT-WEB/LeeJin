import { useState } from 'react';
import * as s from './styles'
import ReactCardFlip from "react-card-flip";
import defaultImg from "../../assets/cardDefault.jpeg"

const Card = ({item: {url}, isFlipped, handleClick}) => {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <s.CardImg onClick={handleClick} src={defaultImg}/>
        <s.CardImg onClick={handleClick} src={url}/>
    </ReactCardFlip>
  );
};

export default Card;