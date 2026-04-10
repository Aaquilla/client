import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 30px;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 15px;
`;

export const AvatarSection = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  /* УБРАЛИ overflow: hidden и border-radius: 50%; 
     Теперь крылья компаса и свиток не будут обрезаться! */
`;

export const PhotoFrameOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  /* Подтягиваем нашу переименованную SVG рамочку */
  background-image: url('/frame.svg'); 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  /* Рамочка прозрачна для кликов мышки */
  pointer-events: none;
  z-index: 10;
`;

/* НОВЫЙ КОНТЕЙНЕР ДЛЯ САМОЙ ФОТКИ */
export const ImageContainer = styled.div`
  position: relative;
  
  /* Размер фотки! Если она будет слишком маленькой или большой 
     относительно пунктира, просто поменяй эти 195px */
  width: 195px; 
  height: 195px;
  
  border-radius: 50%;
  overflow: hidden; /* Обрезаем саму фотку в круг */
  background-color: #ffffff;
  z-index: 5; /* Фотка лежит под рамочкой */

  &:hover > div {
    opacity: 1; /* Показываем затемнение камеры при наведении */
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 30; /* Клик по инпуту будет работать строго внутри фотки */
  }
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
  z-index: 20;
`;

export const FormSection = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    width: 100%;
    background: ${theme.colors.primary};
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
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