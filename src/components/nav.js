import React from 'react';


class Nav extends React.Component {
  render() {
    return (
      <nav >
        <div className="centerNav">
          <a href="#home"><h3>Home</h3></a>
          <a href="#projectList"><h3>Projects</h3></a>
          <a href="#contact"><h3>Contact</h3></a>
          <a href="Kathan_Smith_Resume_final (1).pdf" target="_blank" rel="noopener noreferrer"><h3>Resume</h3></a>
        </div>
      </nav>
    )
  }
}

export default Nav;
