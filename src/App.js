import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';
import Skills from './components/skills';
import Contacts from './components/contacts';
import Nav from './components/nav';
import Intro from './components/intro';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <section>
            <Intro />
          </section>
          <section >
            <Skills />
          </section>
          <section >
            <Projects />
          </section>
          <Contacts />
        </main>
      </div>
    );
  }
}

export default App;
