import { styled } from "styled-components";

const ModalBg = styled.div`
  position: absolute;
  left: 0;
  overflow: auto;
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  overflow: auto;
  background-color: wheat;
  width: 50%;
`;

export const ControlledModal = ({ show, onClose, children }) => {
    return (
        <>
            { show && (
                <ModalBg onClick={onClose}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <button onClick={onClose}>Hide Modal</button>
                        {children}
                    </ModalContent>
                </ModalBg>
            )}
        </>
    );
}