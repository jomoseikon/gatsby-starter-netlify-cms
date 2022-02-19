import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import "./Navbar.css";
const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{backgroundColor:"rgba(40,86,161,1)"}}
      >
        <div className="container">
          <div className="navbar-brand">
          <a href="http://jomo-news.co.jp/" target="_blank" rel="noreferrer" className="navbar-item" >
              <img src={logo} alt="" style={{ width: "120px" }} />
            </a>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span style={{color:"white"}} />
              <span style={{color:"white"}} />
              <span style={{color:"white"}} />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/" style={{backgroundColor:"rgba(40,86,161,1)"}}>
                 トップページ
              </Link>
              <Link className="navbar-item" to="/products" style={{backgroundColor:"rgba(40,86,161,1)"}}>
                入会のご案内
              </Link>
              <Link className="navbar-item" to="/blog" style={{backgroundColor:"rgba(40,86,161,1)"}}>
                最近の講演
              </Link>
              <Link className="navbar-item" to="/about" style={{backgroundColor:"rgba(40,86,161,1)"}}>
                会則
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
