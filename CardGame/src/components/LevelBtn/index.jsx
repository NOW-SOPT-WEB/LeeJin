import * as s from './styles'

const LevelBtn = ({level, setLevel}) => {
  const levelOptions = ['Easy', 'Normal', 'Hard'];

  return (
    <s.BtnContainer>
        {
            levelOptions.map(l => <s.Btn onClick={() => setLevel(l)} clicked={level === l}>{l}</s.Btn>)
        }
    </s.BtnContainer>
  );
};

export default LevelBtn;