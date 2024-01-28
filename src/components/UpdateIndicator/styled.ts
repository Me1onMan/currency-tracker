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
  width: 40px;
  height: 40px;
  background-color: rgba(0, 188, 79, 1);
  border-radius: 50%;
  animation: flicker 3s infinite;

  @keyframes flicker {
    0% {
      background-color: rgba(0, 188, 79, 1);
    }
    50% {
      background-color: rgba(0, 188, 79, 0.2);
    }
    100% {
      background-color: rgba(0, 188, 79, 1);
    }
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;
