import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import * as files from './files';

const dependencies: Record<string, string> = {
  'react-pre-hooks': 'latest',
};

export function Playground() {
  return (
    <React.Suspense fallback={null}>
      <ErrorBoundary fallback="Oops, there was an error loading the Sandbox, try again.">
        <Sandpack
          theme="dark"
          template="react"
          customSetup={{ dependencies }}
          options={{
            classes: styles,
            editorHeight: '100dvh',
            showRefreshButton: true,
            showConsoleButton: true,
            autoReload: false,
            showTabs: true,
          }}
          files={{
            '/App.js': { code: files.app },
            '/Component.js': { code: files.component },
            '/styles.css': { code: files.css },
          }}
        />
      </ErrorBoundary>
    </React.Suspense>
  );
}

const styles = {
  'sp-layout': 'border-none rounded-none overflow-visible',
  'sp-preview-actions': 'last:*:[display:none!important]',
  'sp-code-editor':
    '[&_.cm-scroller]:[scrollbar-width:thin] [&_.cm-scroller]:[scrollbar-color:#fff4_transparent]',
  'sp-console-list': '[scrollbar-width:thin] [scrollbar-color:#fff4_transparent]',
};

// ErrorBoundary component to catch errors in the Sandpack
class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex gap-2 rounded-xl border">
          <span className="inline-flex items-center">⚠</span>
          {this.props.fallback}
        </div>
      );
    }

    return this.props.children;
  }
}
