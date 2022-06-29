import { Fragment } from "react";
import ReactDOM from 'react-dom';
import { StyledBackdrop, StyledModal, Content } from './Modal.style';

const Backdrop = ({onClose}) => {
  return <StyledBackdrop onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
  return (
    <StyledModal>
      <Content>{children}</Content>
    </StyledModal>
  );
};

const portalEl = document.getElementById('overlay');

const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;