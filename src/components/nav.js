import React from 'react';


class Nav extends React.Component {
  render() {
    return (
      <nav >
        <div className="centerNav">
          <a href="#home"><h3>Home</h3></a>
          <a href="#projects"><h3>Projects</h3></a>
          <a href="#contact"><h3>Contact</h3></a>
          <a href="Kathan_Resume.pdf" target="_blank"><h3>Resume</h3></a>
        </div>
      </nav>
    )
  }
}

export default Nav;