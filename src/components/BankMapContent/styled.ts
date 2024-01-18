import styled from "styled-components";

export const MapContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapContainer = styled.div`
  width: 90%;
  height: 500px;
  max-height: 90vh;
  & .marker-disabled {
    display: none;
  }
`;

export const MarkerText = styled.h3`
  color: #000;
`;
