import React, { Component } from "react";

import { ModalWrapper, ToastSuccess } from "./styled";

export default class ToastChart extends Component {
  render() {
    return (
      <ModalWrapper>
        <ToastSuccess>ToastChart</ToastSuccess>
      </ModalWrapper>
    );
  }
}
