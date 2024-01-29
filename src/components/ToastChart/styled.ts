import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: ${({ theme }) => theme.sizes.zero};
  top: ${({ theme }) => theme.sizes.zero};
  width: ${({ theme }) => theme.sizes.percents.vw100};
  height: ${({ theme }) => theme.sizes.percents.vh100};
  display: flex;
  justify-content: center;
`;

export const ToastSuccess = styled.div`
  margin: 1rem auto;
  width: ${({ theme }) => theme.sizes.percents.vh80};
  height: ${({ theme }) => theme.sizes.percents.vh10};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bgToast};
  border-radius: ${({ theme }) => theme.sizes.rem.rem1};
`;
