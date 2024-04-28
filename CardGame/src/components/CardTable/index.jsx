import { useEffect } from 'react';
import Card from '../Card';
import * as s from './styles'
import randomUtil from '../../utils/randomUtil';

const CardTable = ({ cnt }) => {
  const cardItems = randomUtil(cnt);
  return (
    <s.TableContainer>
        {
            cardItems.map((item) => <Card/>)
        }
    </s.TableContainer>
  );
};

export default CardTable;