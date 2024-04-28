import { useEffect } from 'react';
import Card from '../Card';
import * as s from './styles'
import randomUtil from '../../utils/randomUtil';
import { useState } from 'react';

const CardTable = ({ cnt }) => {
  const [clickedId, setClickedId] = useState(-1);
  const cardItems = randomUtil(cnt);
  return (
    <s.TableContainer>
        {
            cardItems.map((item) => <Card item={item} clickedId={clickedId} setClickedId={setClickedId}/>)
        }
    </s.TableContainer>
  );
};

export default CardTable;