import styled from "styled-components";

export const Main = styled.main`
  & section {
    margin: 56px 112px 0;
  }
`;

export const UpdateInfo = styled.div`
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  font-size: 32px;
  font-weight: 200;
  color: #d9d9d9;
`;

export const Indicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: #00bc4f;
  border-radius: 50%;
`;

export const Stocks = styled.section``;

export const SectionHeader = styled.h2`
  max-width: 520px;
  font-size: 32px;
  font-weight: 200;
  padding-bottom: 24px;
  border-bottom: 1px solid #474747;
`;

export const CardsContainer = styled.div`
  margin-top: 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 184px;
  row-gap: 56px;
  justify-items: center;
`;

export const Quotes = styled.section``;
