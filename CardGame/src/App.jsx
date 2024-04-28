import { useState } from 'react'
import Header from './components/Header'
import { Div } from './AppStyles'
import LevelBtn from './components/LevelBtn';

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [level, setLevel] = useState(5);

  return (
    <Div>
      <Header matchingCnt={matchingCnt} entireCnt={level}/>
      <LevelBtn level={level} setLevel={setLevel}/>
    </Div>
  )
}

export default App
