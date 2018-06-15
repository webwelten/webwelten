import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.css';

import Intro from './patterns/Intro';
import Profile from './patterns/Profile';
import About from './patterns/About';
import Projects from './patterns/Projects';
import Footer from './patterns/Footer';

const App = () => (
  <div className="container">

    <Intro />
    <Profile />
    <About />
    <Projects />

    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
