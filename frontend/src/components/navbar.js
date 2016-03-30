import React from 'react'

const Navbar  = () =>{
  return (
    <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <img src="../images/logo.png" alt="Brand" height="30px" />
        </a>
      </div>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Where to go?" />
        </div>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="">Sign up</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">How it works</a></li>
        <li><a href="">List your trip</a></li>
      </ul>
    </div>
    </nav>
  );
}
export default Navbar;
