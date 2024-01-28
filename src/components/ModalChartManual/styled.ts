import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 80vw;
  height: 90vh;
  padding: 5%;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border-radius: 16px;
`;

export const Select = styled.select`
  cursor: pointer;
  outline: none;

  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid ${(props) => props.theme.borderColorInput};
  border-radius: 8px;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const InputGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;

  width: 100%;

  & label {
    color: ${(props) => props.theme.textColorPrimary};
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.75rem;

    & label {
      font-size: 1.25rem;
    }
  }
`;

export const Input = styled.input`
  outline: none;

  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid ${(props) => props.theme.borderColorInput};
  border-radius: 8px;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;

  width: 40%;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid ${(props) => props.theme.borderColorInput};
  border-radius: 8px;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
