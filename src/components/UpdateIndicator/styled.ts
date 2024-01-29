import styled from "styled-components";

export const UpdateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.sizes.rem.rem1};

  margin-top: ${({ theme }) => theme.sizes.rem.rem3};

  font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem2};
  }
`;

export const Indicator = styled.div`
  width: ${({ theme }) => theme.sizes.rem.rem1_5};
  height: ${({ theme }) => theme.sizes.rem.rem1_5};

  border-radius: ${({ theme }) => theme.sizes.percents.p50};

  animation: flicker 3s infinite;

  @keyframes flicker {
    0% {
      background-color: ${({ theme }) => theme.colors.flickerOn};
    }
    50% {
      background-color: ${({ theme }) => theme.colors.flickerOff};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.flickerOn};
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    width: ${({ theme }) => theme.sizes.rem.rem2};
    height: ${({ theme }) => theme.sizes.rem.rem2};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem2_5};
    height: ${({ theme }) => theme.sizes.rem.rem2_5};
  }
`;
