import React, { JSX } from "react";

import { ModalWrapper, ToastSuccess } from "./styled";

export default function ToastChart(): JSX.Element {
  return (
    <ModalWrapper>
      <ToastSuccess>Chart was successfully created!</ToastSuccess>
    </ModalWrapper>
  );
}
