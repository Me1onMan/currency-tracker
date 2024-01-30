import React, { JSX } from "react";

import { IProps } from "./interfaces";
import { Indicator, UpdateInfo } from "./styled";

function Loading(): JSX.Element {
  return <h3>LOADING...</h3>;
}

function UpdateIndicator({ lastUpdatedAt }: IProps): JSX.Element {
  return (
    <UpdateInfo>
      <Indicator />
      {lastUpdatedAt ? `Last updated ${lastUpdatedAt}` : <Loading />}
    </UpdateInfo>
  );
}

export default UpdateIndicator;
