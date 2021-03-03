import React, { Component, PureComponent, createElement } from 'react';

const App = () => (
  <>
    {app1}
    <App2 />
    <App3 />
    <App4 />
  </>
);

//1. React.CreateElement 
const app1 = createElement(
  "h1",
  null,
  "Hello World",
);

//2. React.Component 
class App2 extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

//3. React.PureComponent
class App3 extends PureComponent {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

//4. Functional component
const App4 = () => <h1>Hello World</h1>;

export default App;
