import React from "react";
import * as s from './styles'
import bgSrc from '../../assets/modal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SuccessModal = React.forwardRef(({handleModalClose}, ref) => {
  return (
    <s.ModalContainer src={bgSrc}>
        <s.closeBtn>
            <FontAwesomeIcon icon={faCircleXmark} size="lg" onClick={handleModalClose}/>
        </s.closeBtn>
        <s.homeBtn onClick={handleModalClose}>게임 또 하자</s.homeBtn>
    </s.ModalContainer>
  );
});

export default SuccessModal;