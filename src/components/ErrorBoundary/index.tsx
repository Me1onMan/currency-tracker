import React, { Component } from "react";
import errorImage from "@assets/Not-found.png";

import { IProps, IState } from "./interfaces";
import { Image, MessageContainer, Wrapper } from "./styled";

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): IState {
    return {
      hasError: true,
    };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Wrapper>
          <MessageContainer>
            <h1>Oops! It seems you have a mistake</h1>
            <h2>An error occurred</h2>
            <Image
              src={errorImage}
              alt="Error occured"
              title="Trying to solve problem"
            />
          </MessageContainer>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
