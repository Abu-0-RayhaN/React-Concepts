import React from 'react';

function MyComponent() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className='navbar-brand' href='/'>Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarMenu">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href='/'>Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/'>Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/'>Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href='/'>Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default MyComponent;