import { useEffect } from 'react';
import Card from '../Card';
import * as s from './styles'
import randomUtil from '../../utils/randomUtil';
import { useState } from 'react';
import { useMemo } from 'react';

const CardTable = ({ cnt, setMatchingCnt }) => {
  const [clickedId, setClickedId] = useState([-1, -1]);   // [id, idx]
  const [isFlipped, setIsFlipped] = useState(Array(cnt * 2).fill(false));
  const [isClickable, setIsClickable] = useState(true);

  const cardItems = useMemo(() => {
    setIsFlipped(Array(cnt * 2).fill(false));
    setMatchingCnt(0);
    return randomUtil(cnt);
  }, [cnt]);

  const handleCardClick = (idx, id) => {
    if (isFlipped[idx] || !isClickable) return;

    const update = [...isFlipped];
    update[idx] = true;
    setIsFlipped(update);

    if (clickedId[0] === -1) {
      setClickedId([id, idx]);
      return;
    }

    if (clickedId[0] === id) {    // 정답
      setMatchingCnt(prev => prev + 1);
      setClickedId([-1, -1]);
    } else {                      // 오답
      setIsClickable(false);
      setTimeout(() => {
        update[idx] = false;
        update[clickedId[1]] = false;
        setIsFlipped(update);
        setClickedId([-1, -1]);
        setIsClickable(true);
      }, 700);
    }
  }
  return (
    <s.TableContainer>
        {
          cardItems.map((item, idx) => (
            <Card
              key={item.cardId}
              item={item}
              isFlipped={isFlipped[idx]}
              handleClick={() => handleCardClick(idx, item.id)}
            />
          ))
        }
    </s.TableContainer>
  );
};

export default CardTable;