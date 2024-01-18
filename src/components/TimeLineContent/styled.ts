import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;

export const DropdownDiv = styled.div`
  position: relative;
  & * {
    width: 100%;
  }
`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  background-color: #474747;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 24px;
  text-align: left;
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  background-color: #474747;
  border-radius: 16px;
  max-height: 250px;
  overflow-y: scroll;
  z-index: 1;
`;

export const Item = styled.li`
  border-radius: 16px;
  &:hover {
    background-color: #393939;
  }
`;

export const ItemBtn = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  font-size: 24px;

  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 54px 0;
  width: 90%;

  & > * {
    cursor: pointer;
    /* font-size: 24px; */
    background-color: ${(props) => props.theme.bgColorSecondary};
    color: ${(props) => props.theme.textColorPrimary};
    padding: 0.25rem 0.75rem;
    border: none;
    width: 15%;
  }

  @media (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;

    & > * {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    & button {
      justify-content: center;
    }
  }
`;

export const Select = styled.select`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.bgColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  width: 90%;
`;

export const Option = styled.option``;

export const DateInput = styled.input`
  cursor: pointer;
  /* font-size: 24px; */
  background-color: ${(props) => props.theme.bgColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  /* padding: 4px 16px; */
  border: none;
  width: 90%;
`;

export const OptionBtn = styled.button``;
