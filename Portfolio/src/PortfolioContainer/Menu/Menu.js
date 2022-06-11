import React from 'react';
import './Menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
  <div className={'Menu ' + (menuOpen && "active")}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#Home">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#AboutMe">AboutMe</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#Resume">Resume</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#Testimonial">Projects</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#ContactMe">ContactMe</a>
          </li>
      </ul>
  </div>
  );
}
