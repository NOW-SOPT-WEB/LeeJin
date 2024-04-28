import Card from '../Card';
import * as s from './styles'

const CardTable = ({ cnt }) => {
  return (
    <s.TableContainer>
        {
            Array.from({ length: cnt * 2 }).map(() => {
                console.log("안녕");
                return <Card/>
            })
        }
    </s.TableContainer>
  );
};

export default CardTable;