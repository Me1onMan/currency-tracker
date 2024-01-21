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
`;

export const ToastSuccess = styled.div`
  margin: 1rem auto;
  width: 80vw;
  height: 10vh;
  border-radius: 1rem;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
