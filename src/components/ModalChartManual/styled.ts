import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  left: ${({ theme }) => theme.sizes.zero};
  top: ${({ theme }) => theme.sizes.zero};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.percents.vw100};
  height: ${({ theme }) => theme.sizes.percents.vh100};

  background: ${({ theme }) => theme.colors.bgModalWrapper};
`;

export const ModalContainer = styled.div`
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.rem.rem0_5};

  width: ${({ theme }) => theme.sizes.percents.vw80};
  height: ${({ theme }) => theme.sizes.percents.vh90};
  padding: ${({ theme }) => theme.sizes.percents.p5};

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border-radius: ${({ theme }) => theme.sizes.rem.rem1};
`;

export const Select = styled.select`
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const InputGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.rem.rem0_5};

  width: ${({ theme }) => theme.sizes.percents.p100};

  & label {
    color: ${({ theme }) => theme.colors.textColorPrimary};
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.sizes.rem.rem0_75};

    & label {
      font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
    }
  }
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: ${({ theme }) => theme.sizes.percents.p100};
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.sizes.percents.p40};
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;
