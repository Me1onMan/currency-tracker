import styled from "styled-components";

export const FooterContainer = styled.footer``;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0.5rem;
  margin-top: ${({ theme }) => theme.sizes.rem.rem3};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.sizes.rem.rem2};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.rem.rem1};
  & p {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.sizes.rem.rem1_5};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem2};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    width: ${({ theme }) => theme.sizes.rem.rem2_5};
  }
`;

export const LogoName = styled.p`
  font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  }
`;

export const FooterDescription = styled.p`
  display: none;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    display: block;
    max-width: ${({ theme }) => theme.sizes.rem.rem18};

    font-weight: 200;
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    max-width: ${({ theme }) => theme.sizes.rem.rem30};
  }
`;

export const Copyright = styled.p`
  margin-top: ${({ theme }) => theme.sizes.rem.rem2};
  padding: 0.5rem 0;

  font-family: "Inter", sans-serif;
  font-size: ${({ theme }) => theme.sizes.rem.rem0_75};
  color: ${({ theme }) => theme.colors.textColorSecondary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1};
  }
`;
