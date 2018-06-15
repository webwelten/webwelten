import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.css';

import Intro from './patterns/Intro';
import Profile from './patterns/Profile';

import Button from './components/Button';
import Section from './components/Section';

const App = () => (
  <div className="container">
    <Intro />
    <Profile />

    <Section shadow>
      <p>Hello World!</p>
      <p>
        <a href="/test.html">Das ist ein Link…</a>
      </p>
      <Button href="/neu.html">Test</Button>
      <ul className="list-inline">
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
      </ul>
      <footer className="footer">Impressum</footer>
    </Section>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
