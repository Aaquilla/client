import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px;
  width: 100%;
  max-width: 520px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  
  color: #3B3028; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px; 
  border-radius: 50%; 
  
  transition: all 0.3s ease-in-out; 
  &:hover {
    background-color: #3B3028; 
    color: #ffffff; 
  }
`;

export const ModalTitle = styled.h3`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 40px;
  margin-top: 10px;
  line-height: 1.4;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const CancelButton = styled.button`
  flex: 1;
  background: transparent;
  color: #3B3028;
  border: 1px solid #3B3028;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #fcfcfc;
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: #3B3028;
  color: #ffffff;
  border: 1px solid #3B3028;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat Alternates', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;