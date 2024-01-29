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
  align-items: center;
  background: ${({ theme }) => theme.colors.bgModalWrapper};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.sizes.percents.vw80};
  height: ${({ theme }) => theme.sizes.percents.vh90};
  gap: ${({ theme }) => theme.sizes.rem.rem0_75};

  padding: ${({ theme }) => theme.sizes.percents.p5};

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border-radius: ${({ theme }) => theme.sizes.rem.rem1};

  overflow: auto;

  & > * {
    width: ${({ theme }) => theme.sizes.percents.p100};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    gap: ${({ theme }) => theme.sizes.rem.rem1_25};

    & * {
      font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    gap: ${({ theme }) => theme.sizes.rem.rem1_5};

    & * {
      font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
    }
  }
`;

export const Header = styled.h3`
  margin-bottom: ${({ theme }) => theme.sizes.rem.rem1};

  font-weight: 400;
  color: ${({ theme }) => theme.colors.textColorCardPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_75};
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.bgColorInput};
  padding: 0.25rem 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};
  outline: none;
  color: ${({ theme }) => theme.colors.textColorCardSecondary};
`;

export const DropdownDiv = styled.div`
  position: relative;
  & * {
    width: ${({ theme }) => theme.sizes.percents.p100};
  }
`;

export const DropdownBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};
  padding: 0.25rem 0.5rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.textColorCardSecondary};
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};
  max-height: ${({ theme }) => theme.sizes.rem.rem15};
  overflow-y: scroll;
`;

export const Item = styled.li`
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};
  color: ${({ theme }) => theme.colors.textColorCardSecondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dropdownItemHover};
  }
`;

export const ItemBtn = styled.button`
  width: ${({ theme }) => theme.sizes.percents.p100};
  height: ${({ theme }) => theme.sizes.percents.p100};
  text-align: left;
  color: ${({ theme }) => theme.colors.textColorCardSecondary};

  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
`;

export const CloseBtn = styled.button`
  margin-top: auto;
  padding: ${({ theme }) => theme.sizes.rem.rem0_5};
  max-width: ${({ theme }) => theme.sizes.percents.p40};

  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};

  color: ${({ theme }) => theme.colors.textColorCardSecondary};
`;
