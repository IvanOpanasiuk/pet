import React, { type ReactNode, type ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor (props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render () {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <Suspense fallback=''><PageError /></Suspense>;
    }

    return children;
  }
}

export default ErrorBoundary;
