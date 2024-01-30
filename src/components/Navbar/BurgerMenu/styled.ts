import styled from "styled-components";

export const BurgerButton = styled.div`
  cursor: pointer;

  width: ${({ theme }) => theme.sizes.rem.rem3};
  height: ${({ theme }) => theme.sizes.rem.rem3};
  background-color: red;
`;

export const MenuContainer = styled.div`
  z-index: 9999;
  position: fixed;
  left: ${({ theme }) => theme.sizes.zero};
  top: ${({ theme }) => theme.sizes.zero};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.sizes.percents.p100};
  height: ${({ theme }) => theme.sizes.percents.p100};
  padding: ${({ theme }) => theme.sizes.rem.rem1};

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
`;

export const CloseButton = styled.div`
  cursor: pointer;

  align-self: flex-end;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.rem.rem2};
  height: ${({ theme }) => theme.sizes.rem.rem2};

  font-size: ${({ theme }) => theme.sizes.rem.rem2};

  & > span {
    width: ${({ theme }) => theme.sizes.percents.p100};
    height: ${({ theme }) => theme.sizes.px.px2};

    background-color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  & span:first-of-type {
    transform: rotate(45deg);
  }

  & span:last-child {
    transform: rotate(-45deg);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.rem.rem1};

  margin-top: ${({ theme }) => theme.sizes.rem.rem3};

  & a {
    padding: 0.5rem 1rem;
    border-bottom: ${({ theme }) => theme.borders.card};

    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
    text-align: center;
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }
`;
