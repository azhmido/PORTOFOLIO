import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-page flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-3xl font-bold text-heading mb-4">
              Something went wrong
            </h1>
            <p className="font-body text-body mb-8 leading-relaxed">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="border border-border text-heading hover:bg-heading hover:text-page px-6 py-2 rounded-full font-body text-sm tracking-wider uppercase transition-all duration-200"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
