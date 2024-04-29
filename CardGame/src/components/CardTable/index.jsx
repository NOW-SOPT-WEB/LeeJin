import Card from '../Card';
import * as s from './styles'
import randomUtil from '../../utils/randomUtil';
import { useState, useMemo, useEffect } from 'react';

const CardTable = ({ cnt, setMatchingCnt }) => {
  const [clickedId, setClickedId] = useState([-1, -1]);   // [id, idx]
  const [isFlipped, setIsFlipped] = useState(Array(cnt * 2).fill(false));
  const [isClickable, setIsClickable] = useState(true);
  
  const cardItems = useMemo(() => randomUtil(cnt) || [], [cnt]);
  
  useEffect(() => {
    setIsFlipped(Array(cnt * 2).fill(false));
    setMatchingCnt(0);
    setClickedId([-1, -1]);
  }, [cnt])

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
      }, 500);
    }
  }
  return (
    <s.TableContainer columns={cnt <= 7 ? 5 : 6}>
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