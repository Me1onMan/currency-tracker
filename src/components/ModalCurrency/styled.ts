import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 9999;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 90vh;
  padding: 5%;
  gap: 0.75rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border-radius: 16px;

  overflow: auto;

  & > * {
    width: 100%;
  }

  @media (min-width: 420px) {
    gap: 1.25rem;

    & * {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    gap: 1.5rem;

    & * {
      font-size: 1.5rem;
    }
  }
`;

export const Header = styled.h3`
  margin-bottom: 1rem;

  font-weight: 400;
  color: ${(props) => props.theme.textColorCardPrimary};

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.bgColorInput};
  padding: 0.25rem 0.5rem;
  border: 2px solid #909090;
  border-radius: 8px;
  outline: none;
  color: ${(props) => props.theme.textColorCardSecondary};
`;

export const DropdownDiv = styled.div`
  position: relative;
  & * {
    width: 100%;
  }
`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid #909090;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  text-align: left;
  color: ${(props) => props.theme.textColorCardSecondary};
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: ${(props) => props.theme.bgColorInput};
  border-radius: 8px;
  max-height: 15rem;
  overflow-y: scroll;
`;

export const Item = styled.li`
  border-radius: 8px;
  color: ${(props) => props.theme.textColorCardSecondary};
  &:hover {
    background-color: #393939;
  }
`;

export const ItemBtn = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  color: ${(props) => props.theme.textColorCardSecondary};

  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  margin-top: auto;
  padding: 0.5rem;
  max-width: 40%;

  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid #909090;
  border-radius: 8px;

  color: ${(props) => props.theme.textColorCardSecondary};
`;
