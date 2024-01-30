import styled from "styled-components";

export const Input = styled.input`
  display: none;

  &:checked + label:after {
    left: ${({ theme }) => theme.sizes.percents.p94};
    transform: translateX(-100%);
  }
`;

export const Label = styled.label`
  text-indent: -9999px;
  cursor: pointer;

  position: relative;
  display: block;
  width: ${({ theme }) => theme.sizes.rem.rem2_25};
  height: ${({ theme }) => theme.sizes.rem.rem1_25};

  background: transparent;
  border: ${({ theme }) => theme.borders.borderToggler};
  border-radius: 100px;

  &:after {
    content: "";

    position: absolute;
    top: ${({ theme }) => theme.sizes.px.px1};
    left: ${({ theme }) => theme.sizes.px.px1};
    width: ${({ theme }) => theme.sizes.px.px14};
    height: ${({ theme }) => theme.sizes.px.px14};

    background: transparent;
    border-radius: ${({ theme }) => theme.sizes.percents.p50};
    border: ${({ theme }) => theme.borders.borderToggler};

    transition: 0.3s;
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem3_25};
    height: ${({ theme }) => theme.sizes.rem.rem2};

    &:after {
      width: ${({ theme }) => theme.sizes.px.px26};
      height: ${({ theme }) => theme.sizes.px.px26};
    }
  }
`;
