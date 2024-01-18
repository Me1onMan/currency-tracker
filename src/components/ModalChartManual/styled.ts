import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 70vw;
  height: 80vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColorSecondary};
  border-radius: 100px;
  padding: 5%;

  /* & * {
    font-size: 24px;
  } */
`;

export const Select = styled.select`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.borderColorInput};
  background-color: ${(props) => props.theme.bgColorInput};
  color: ${(props) => props.theme.textColorPrimary};
  outline: none;
`;

export const InputGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.75rem;
  width: 90%;

  & label {
    color: ${(props) => props.theme.textColorPrimary};
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.borderColorInput};
  background-color: ${(props) => props.theme.bgColorInput};
  color: ${(props) => props.theme.textColorPrimary};
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.borderColorInput};
  background-color: ${(props) => props.theme.bgColorInput};
  color: ${(props) => props.theme.textColorPrimary};
`;
