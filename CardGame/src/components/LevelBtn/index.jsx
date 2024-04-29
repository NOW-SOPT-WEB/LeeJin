import * as s from './styles'

const LevelBtn = ({level, setLevel}) => {
  const levelOptions = {'Easy': 5, 'Normal': 7, 'Hard': 9};

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