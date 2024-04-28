import { useState } from 'react'
import Header from './components/Header'
import { Div } from './AppStyles'

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [entireCnt, setEntireCnt] = useState(5);

  return (
    <Div>
    <Header matchingCnt={matchingCnt} entireCnt={entireCnt}/>
    </Div>
  )
}

export default App
