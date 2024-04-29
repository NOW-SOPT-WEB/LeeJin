import { useState, useEffect } from 'react'
import Header from './components/Header'
import { Div } from './AppStyles'
import LevelBtn from './components/LevelBtn';
import CardTable from './components/CardTable/index';
import { Modal } from "@mui/material";
import SuccessModal from './components/SuccessModal';

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [level, setLevel] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (level && matchingCnt === level) {
      setIsModalOpen(true);
    }
  }, [matchingCnt]);

  const handleReset = () => {
    const prev = level;
    setLevel(0);
    setTimeout(() => setLevel(prev), 1);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    handleReset();
  }

  return (
    <Div>
      <Header matchingCnt={matchingCnt} entireCnt={level} handleReset={handleReset}/>
      <LevelBtn level={level} setLevel={setLevel}/>
      <CardTable cnt={level} setMatchingCnt={setMatchingCnt}/>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <SuccessModal handleModalClose={handleModalClose}/>
      </Modal>
    </Div>
  )
}

export default App
