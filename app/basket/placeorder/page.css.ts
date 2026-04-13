import styled, { css } from "styled-components";

const fontBase = css`
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 60px 80px; 
  box-sizing: border-box;
  ${fontBase}
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Gabriela", serif;
  font-size: 48px;
  color: #3b3028;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 80px;
  text-align: left;
`;

/* ===== TIMELINE ===== */
export const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1400px; 
  margin: 0 auto 80px;
`;

export const TimelineTrack = styled.div`
  position: absolute;
  top: 24px;
  left: 55px;
  right: 55px;
  height: 6px;
  background: #f3f0ec;
  transform: translateY(-50%);
  z-index: 1;
`;

export const TimelineProgress = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #3b3028;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.3s ease;
  z-index: 2;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 3;
  width: 110px;
  position: relative;
`;

export const Circle = styled.div<{ $state: "completed" | "active" | "pending" }>`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  
  background: ${({ $state }) => ($state === "pending" ? "#fff" : "#3b3028")};
  color: ${({ $state }) => ($state === "pending" ? "#3b3028" : "#fff")};
  border: ${({ $state }) => ($state === "pending" ? "1px dashed #888" : "none")};
  
  transition: all 0.3s ease;
`;

export const StepLabel = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  text-align: center;
  line-height: 1.4;
`;

/* ===== FORMS ===== */
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500; 
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px; 
  border: 1px solid #e9e3d9;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 400; 
  ${fontBase}
  outline: none;
  background: #fff;
  transition: border-color 0.2s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-color: #3b3028;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 20px; 
  border: 1px solid #e9e3d9;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 400;
  ${fontBase}
  outline: none;
  background: #fff;
  appearance: none;
  cursor: pointer;
  color: #000;

  &:invalid {
    color: #ccc;
  }

  &:focus {
    border-color: #3b3028;
  }
`;

export const SelectIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #ccc;
  display: flex;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #e9e3d9;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 400;
  ${fontBase}
  outline: none;
  resize: vertical;
  min-height: 120px;
  background: #fff;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    border-color: #3b3028;
  }
`;

/* ===== CONTROLS ===== */
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 50px auto 0;
`;

export const IconButton = styled.button<{ $disabled?: boolean }>`
  width: 60px; 
  height: 60px;
  border-radius: 50%;
  background: ${({ $disabled }) => ($disabled ? "#cecece" : "#3b3028")};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.9)};
  }

  svg {
    width: 28px !important; /* Адекватный размер иконки */
    height: 28px !important;
    stroke-width: 2px !important; /* Нормальная толщина линий */
  }
`;

export const SubmitButton = styled.button`
  background: #3b3028;
  color: #fff;
  padding: 0 36px;
  height: 60px; 
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  ${fontBase}
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

/* ===== MODAL ===== */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  max-width: 450px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModalTitle = styled.h3`
  font-family: "Gabriela", serif;
  font-size: 24px;
  color: #3b3028;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ModalBtnOutline = styled.button`
  padding: 12px 24px;
  border: 1px solid #3b3028;
  background: transparent;
  color: #3b3028;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  ${fontBase}

  &:hover {
    background: #f7f3e7;
  }
`;

export const ModalBtnSolid = styled.button`
  padding: 12px 24px;
  background: #3b3028;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  ${fontBase}

  &:hover {
    opacity: 0.9;
  }
`;