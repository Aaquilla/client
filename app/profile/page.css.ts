import styled from "styled-components";

// Глобальные стили для контента
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
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  h2 {
    font-weight: 400;
  }

  button {
    height: 100%;

    border: none;
    background: #6F3F18;
    color: #ffffff;
    gap: 5px;
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

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
`;

export const AvatarSection = styled.div`
  position: relative;

  width: 220px;
  height: 220px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  overflow: hidden;

  input {
    position: absolute;
    width: 100%;
    height: 100%;

    cursor: pointer;
    opacity: 0;
    background: red;
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
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    padding: 10px;
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
  }
`;
