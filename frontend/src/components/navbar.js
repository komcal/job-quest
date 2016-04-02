import React from 'react'

const Navbar  = () =>{
  return (
    <nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
        <img src="./images/logo.png" height="30px" />
      </a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Where to go? <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Bangkok</a></li>
            <li><a href="#">Changmai</a></li>
            <li><a href="#">Huahin</a></li>
          </ul>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button  className="btn-signup">Sign up</button>
        </li>
        <li><a href="#">Login</a></li>
        <li><a href="#">How it works</a></li>
        <li><a href="#">Login</a></li>
        <li>
        <button  className="btn-list">List your trip</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
export default Navbar;
