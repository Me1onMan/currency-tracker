import styled from "styled-components";

export const MapContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapContainer = styled.div`
  width: ${(props) => props.theme.sizes.percents.p80};
  height: ${(props) => props.theme.sizes.percents.vh90};

  & .marker-disabled {
    display: none;
  }
`;

export const MarkerText = styled.h3`
  color: ${(props) => props.theme.colors.black};
`;
