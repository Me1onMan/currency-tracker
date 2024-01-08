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
  width: 50vw;
  height: 80vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #202025;
  border-radius: 100px;
  padding: 5%;
  /* overflow: scroll; */

  & * {
    width: 80%;
  }
`;

export const Header = styled.h3`
  font-weight: 400;
  font-size: 35px;
  color: #d9d9d9;
`;

export const Input = styled.input`
  background-color: #474747;
  font-size: 24px;
  padding: 8px 12px;
  border: 2px solid #909090;
  border-radius: 16px;
  outline: none;
`;

export const DropdownDiv = styled.div`
  position: relative;
  & * {
    width: 100%;
  }
`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  background-color: #474747;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 24px;
  text-align: left;
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: #474747;
  border-radius: 16px;
  max-height: 250px;
  overflow-y: scroll;
`;

export const Item = styled.li`
  border-radius: 16px;
  &:hover {
    background-color: #393939;
  }
`;

export const ItemBtn = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: 24px;

  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  margin-top: auto;
  background-color: #474747;
  border: none;
  border-radius: 16px;
  padding: 8px;
  max-width: 40%;
  font-size: 24px;
`;
