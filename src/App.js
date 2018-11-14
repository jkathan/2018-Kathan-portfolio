import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/projects';
import Skills from './components/skills';
import Contacts from './components/contacts';
import Nav from './components/nav';
import Intro from './components/intro';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Nav />
        <main className="App-main row">
          <section className='intro clear'>
            <Intro />
          </section>
          <section className='skills'>
            <Skills />
          </section>
          <section className='projects'>
            <Projects />
          </section>
        
          <Contacts />
          </main>
      </div>
    );
  }
}

export default App;
