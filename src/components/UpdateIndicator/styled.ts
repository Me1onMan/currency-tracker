import styled from "styled-components";

export const UpdateInfo = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  font-size: 2rem;
  font-weight: 200;
  color: ${(props) => props.theme.textColorPrimary};

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Indicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: #00bc4f;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;
