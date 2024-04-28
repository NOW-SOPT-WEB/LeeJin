import { useState } from 'react'
import Header from './components/Header'
import { Div } from './AppStyles'
import LevelBtn from './components/LevelBtn';
import CardTable from './components/CardTable/index';

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [level, setLevel] = useState(5);

  return (
    <Div>
      <Header matchingCnt={matchingCnt} entireCnt={level}/>
      <LevelBtn level={level} setLevel={setLevel}/>
      <CardTable cnt={level}/>
    </Div>
  )
}

export default App
