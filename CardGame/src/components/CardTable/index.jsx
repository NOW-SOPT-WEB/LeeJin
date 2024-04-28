import { useEffect } from 'react';
import Card from '../Card';
import * as s from './styles'
import randomUtil from '../../utils/randomUtil';
import { useState } from 'react';
import { useMemo } from 'react';

const CardTable = ({ cnt }) => {
  const [clickedId, setClickedId] = useState(-1);
  const cardItems = useMemo(() => {
    return randomUtil(cnt)
  }, [cnt]);

  console.log({clickedId})
  return (
    <s.TableContainer>
        {
            cardItems.map((item) => <Card item={item} clickedId={clickedId} setClickedId={setClickedId}/>)
        }
    </s.TableContainer>
  );
};

export default CardTable;