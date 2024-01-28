import styled from "styled-components";

export const UpdateInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-size: 1.25rem;
  font-weight: 200;
  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 420px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Indicator = styled.div`
  width: 24px;
  height: 24px;
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

  @media (min-width: 420px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
