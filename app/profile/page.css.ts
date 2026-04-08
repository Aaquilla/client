import styled from "styled-components";

// Глобальні стилі для контенту
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const PassportHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.secondary || '#6F3F18'};

  h2 {
    font-weight: 400;
  }

  button {
    height: 100%;
    border: none;
    background: #6F3F18;
    color: #ffffff;
    gap: 5px;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  .badges {
    height: 100%;
    display: flex;
    gap: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  padding: 30px;

  border: 1px solid ${({ theme }) => theme.colors.secondary || '#6F3F18'};
  border-radius: 15px;
`;

export const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  opacity: 0; 
  transition: opacity 0.3s ease;
  pointer-events: none; 
  z-index: 10;
`;

export const AvatarSection = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  overflow: hidden;
  
  border: 4px solid #3B3028; 

  &:hover ${AvatarOverlay} {
    opacity: 1;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 20; 
  }
`;

export const FormSection = styled.div`
  max-width: 400px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    width: 100%;
    background: ${({ theme }) => theme.colors.primary || '#4A2511'};
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  input {
    padding: 10px 15px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
  }
`;

/* === ЗАГАЛЬНІ СТИЛІ ДЛЯ МОДАЛЬНИХ ВІКОН === */
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
  top: 25px;
  right: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #3B3028; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px; 
  border-radius: 50%; 
  transition: all 0.2s ease-in-out; 

  &:hover {
    background-color: #524339;
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

/* ========================================================= */
/* === СТИЛІ СПЕЦІАЛЬНО ДЛЯ МОДАЛКИ СТАТУСУ (ТАБ-СЛАЙДЕР) === */
/* ========================================================= */

export const StatusModalBox = styled(ModalBox)`
  max-width: 680px;
  padding: 60px 50px;
  align-items: stretch; 
  text-align: left;
  max-height: 90vh; 
  overflow-y: auto; 
`;

export const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  /* === ВИПРАВЛЕНО: Жорстко опустили шапку вниз, щоб хрестик не перекривав плашку === */
  margin-top: 30px; 
  margin-bottom: 60px; 
`;

export const StatusTitleBlock = styled.div`
  h3 {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    margin: 0 0 8px 0;
  }
  span {
    font-size: 14px;
    color: #666666;
  }
`;

export const StatusBadge = styled.div`
  background: #6F3F18;
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
`;

/* ТАЙМЛАЙН (ЛІНІЯ ПРОГРЕСУ) */
export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
`;

export const TimelineLineBase = styled.div`
  position: absolute;
  top: 25px;
  left: 25px; 
  right: 25px; 
  height: 4px;
  background: #F5F5F5;
  z-index: 1;
`;

export const TimelineLineActive = styled.div<{ $progress: string }>`
  position: absolute;
  top: 25px;
  left: 25px;
  width: ${({ $progress }) => $progress};
  height: 4px;
  background: #3B3028;
  z-index: 2;
  transition: width 0.4s ease-in-out;
`;

export const TimelineNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 3;
  width: 100px; 
  cursor: pointer;
  
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const TimelineCircle = styled.div<{ $active?: boolean; $achieved?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-sizing: border-box;

  box-shadow: 0 0 0 6px #ffffff; 

  background-color: ${({ $achieved }) => ($achieved ? '#3B3028' : '#ffffff')};
  color: ${({ $achieved }) => ($achieved ? '#ffffff' : '#4A4A4A')};
  border: ${({ $achieved }) => ($achieved ? 'none' : '1px dashed #A0A0A0')};

  ${({ $active, $achieved }) => $active && `
    border: 3px solid ${$achieved ? '#6F3F18' : '#3B3028'}; 
    ${$achieved ? '' : 'color: #000000; font-weight: 600;'}
  `}

  &:hover {
    transform: scale(1.05);
  }
`;

export const TimelineLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  text-align: center;
  white-space: pre-line; 
  line-height: 1.3;
`;

/* КАРТКИ З ІНФОРМАЦІЄЮ */
export const InfoCard = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoCardTitle = styled.h4`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin: 0 0 25px 0;
`;

/* Рядок для Історії Миль (з жирним значенням праворуч) */
export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #F0F0F0;
  font-size: 15px;
  color: #4A4A4A;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  /* Друге значення (праворуч) робимо жирним */
  span:nth-child(2) {
    font-weight: 600;
    color: #000000;
  }
`;

/* Рядок для Бонусів (текст не жирний) */
export const BonusRow = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid #F0F0F0;
  font-size: 15px;
  color: #4A4A4A;
  line-height: 1.5;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;