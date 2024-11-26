export const app = `\
import { Component } from './Component';

export default function App() {
  return <Component />;
}
`;

export const component = `\
export function Component() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
`;

export const css = `\
body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  text-align: center;
  height: 90dvh;
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}

small {
  font-weight: 500;
}
`;
