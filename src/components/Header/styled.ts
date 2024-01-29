import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.rem.rem2};
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.colors.bgColorHeader};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    padding: 1.5rem 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.rem.rem0_5};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    align-items: center;
    gap: ${({ theme }) => theme.sizes.rem.rem2};
  }
`;

export const HeaderH1 = styled.h1`
  display: flex;
  flex-direction: column;

  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.rem.rem2};

  & > span {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem2_5};
  }
`;

export const DescriptionText = styled.p`
  max-width: ${({ theme }) => theme.sizes.rem.rem25};

  font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  text-align: center;
  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  }
`;

export const Logo = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    display: block;
    height: ${({ theme }) => theme.sizes.rem.rem15};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    height: ${({ theme }) => theme.sizes.rem.rem20};
  }
`;
