// UNCONTROLLED MODAL

import {useState} from "react";
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
export const Modal = ({ children }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            { show && (
                <ModalBg onClick={() => setShow(false)}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <button onClick={() => setShow(false)}>Hide Modal</button>
                        {children}
                    </ModalContent>
                </ModalBg>
            )}
        </>
    );
}