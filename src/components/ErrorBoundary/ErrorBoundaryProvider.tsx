import React, { Component, ErrorInfo } from 'react';

interface IErrorBoundaryProviderProps {
  children?: React.ReactNode;
}

interface IErrorBoundaryProviderState {
  hasError: boolean;
}

export class ErrorBoundaryProvider extends Component<
  IErrorBoundaryProviderProps,
  IErrorBoundaryProviderState
> {
  state: IErrorBoundaryProviderState = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    return <>{this.state.hasError ? <h2>Error</h2> : this.props.children}</>;
  }
}
