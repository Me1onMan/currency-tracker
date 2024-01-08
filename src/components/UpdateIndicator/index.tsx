import React from "react";

import { Indicator, UpdateInfo } from "./styled";

interface IndicatorProps {
  lastUpdatedAt: string;
}

function Loading(): JSX.Element {
  // console.log("Loading...");
  return <h3>LOADING...</h3>;
}

function UpdateIndicator({ lastUpdatedAt }: IndicatorProps): JSX.Element {
  return (
    <UpdateInfo>
      <Indicator />
      {lastUpdatedAt ? `Last updated ${lastUpdatedAt}` : <Loading />}
    </UpdateInfo>
  );
}

export default UpdateIndicator;
