import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Without this, one thrown error anywhere in the tree unmounts the whole app
 * and the visitor gets a blank white page with no way back. A guest looking at
 * rooms should still be able to reach us even if something breaks.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
        <div className="max-w-xl text-center">
          <p className="font-AvenirLight text-xs uppercase tracking-[0.35em] text-secondary mb-6">
            Khumbu Lodge
          </p>
          <h1 className="font-Editorial text-4xl md:text-6xl text-primary leading-tight mb-6">
            Something went wrong
          </h1>
          <p className="font-AvenirLight text-foreground leading-relaxed mb-10">
            This page failed to load. Please try again, and if it keeps happening
            you can always reach us directly.
          </p>

          <div className="font-AvenirLight text-sm tracking-[0.15em] space-y-2 mb-10">
            <a
              href="mailto:info@khumbulodge.com"
              className="block text-primary underline underline-offset-4"
            >
              INFO@KHUMBULODGE.COM
            </a>
            <a href="tel:+97738540144" className="block text-foreground">
              +977 38-540144
            </a>
            <a href="tel:+97738540166" className="block text-foreground">
              +977 38-540166
            </a>
          </div>

          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-AvenirLight text-xs uppercase tracking-[0.25em]"
          >
            Back to the lodge
          </a>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
