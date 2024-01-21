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
  width: 70vw;
  height: 80vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColorSecondary};
  border-radius: 16px;
  padding: 5%;
  overflow: auto;

  & * {
    width: 80%;
  }
`;

export const Header = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColorCardPrimary};
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.bgColorInput};
  padding: 0.5rem 0.75rem;
  border: 2px solid #909090;
  border-radius: 16px;
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
  border-radius: 16px;
  padding: 0.5rem 0.75rem;
  text-align: left;
  color: ${(props) => props.theme.textColorCardSecondary};
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: ${(props) => props.theme.bgColorInput};
  border-radius: 16px;
  max-height: 15rem;
  overflow-y: scroll;
`;

export const Item = styled.li`
  border-radius: 16px;
  ${(props) => props.theme.textColorCardSecondary}
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
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  margin-top: auto;
  background-color: ${(props) => props.theme.bgColorInput};
  border: none;
  border-radius: 16px;
  padding: 0.5rem;
  max-width: 40%;
  color: ${(props) => props.theme.textColorCardSecondary};
`;
