import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${({ theme }) => theme.sizes.percents.vh90};
  color: black;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes.rem.rem20};
`;
