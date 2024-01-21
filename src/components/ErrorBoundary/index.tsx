import React, { Component, ReactNode } from "react";
import errorImage from "@assets/Not-found.png";

import { Image, MessageContainer, Wrapper } from "./styled";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log(error);

    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Wrapper>
          <MessageContainer>
            <h1>Oops! It seems you have a mistake</h1>
            <h2>An error occurred</h2>
            <Image src={errorImage} alt="error occured" />
          </MessageContainer>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
