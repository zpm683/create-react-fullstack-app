import * as React from "react";

type Props = {
  renderError?: (error: Error) => React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  children?: React.ReactNode;
};

type State =
  | {
      hasError: false;
    }
  | {
      hasError: true;
      error: Error;
    };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static defaultProps: Partial<Props> = {
    onError: (error, errorInfo) => {
      console.log(`%cERROR:${error}`, "color: red");
    },
    renderError: (error) => {
      return defaultFallbackComponent(error);
    },
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.props.renderError) {
      if (this.state.hasError) {
        return this.props.renderError(this.state.error);
      }
    }
    return this.props.children;
  }
}

function defaultFallbackComponent(error: Error) {
  return <div>HAVE ERROR!</div>;
}
