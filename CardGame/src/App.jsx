import { useState } from 'react'
import Header from './components/Header'
import { Div } from './AppStyles'
import LevelBtn from './components/LevelBtn';

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [entireCnt, setEntireCnt] = useState(5);
  const [level, setLevel] = useState('Easy');

  return (
    <Div>
      <Header matchingCnt={matchingCnt} entireCnt={entireCnt}/>
      <LevelBtn level={level} setLevel={setLevel}/>
    </Div>
  )
}

export default App
