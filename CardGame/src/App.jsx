import { useState } from 'react'
import Header from './components/Header'
import { MainWrapper } from './AppStyles'
import LevelBtn from './components/LevelBtn';
import CardTable from './components/CardTable/index';
import { Modal } from "@mui/material";
import SuccessModal from './components/SuccessModal';
import { GlobalStyle } from './styles/GlobalStyle';
import { Global, ThemeProvider } from '@emotion/react';
import { Theme } from './styles/Theme';

function App() {
  const [matchingCnt, setMatchingCnt] = useState(0);
  const [level, setLevel] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (level && matchingCnt === level && !isModalOpen) {
      setIsModalOpen(true);
  }

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
    // <ThemeProvider theme={Theme}>
    //   <Global styles={GlobalStyle}/>
      <MainWrapper>
        <Header matchingCnt={matchingCnt} entireCnt={level} handleReset={handleReset}/>
        <LevelBtn level={level} setLevel={setLevel}/>
        <CardTable cnt={level} setMatchingCnt={setMatchingCnt}/>
        <Modal open={isModalOpen} onClose={handleModalClose}>
          <SuccessModal handleModalClose={handleModalClose}/>
        </Modal>
      </MainWrapper>
    // </ThemeProvider>
  )
}

export default App
