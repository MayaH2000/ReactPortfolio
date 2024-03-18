import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <button><span class="material-symbols-outlined">info</span><NavLink to="/about-me" >About Me</NavLink></button>
        <button><span class="material-symbols-outlined">keyboard</span><NavLink to="/blog" >Blog</NavLink></button>
        <button><span class="material-symbols-outlined">style</span><NavLink to="/portfolio" >Portfolio</NavLink></button>
        <button> <span class="material-symbols-outlined">call</span> <NavLink to="/contact" >Contact</NavLink></button>
        <button><span class="material-symbols-outlined">contract_edit</span><NavLink to="/resume" >Resume</NavLink></button>
        
      </ul>
    </nav>
  );
}

export default Navigation;