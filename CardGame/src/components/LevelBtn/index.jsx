import { levelOptions } from '../../constants/constants';
import * as s from './styles'

const LevelBtn = ({level, setLevel}) => {
  return (
    <s.BtnContainer>
        {
            Object.entries(levelOptions).map(([l, cnt]) =>
                <s.Btn key={l} onClick={() => setLevel(cnt)} clicked={level === cnt}>{l}</s.Btn>
            )
        }
    </s.BtnContainer>
  );
};

export default LevelBtn;