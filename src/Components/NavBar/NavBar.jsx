import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isclicked: false,
      searchText: ""
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // Redirect or perform any other action based on the search query
    window.location.href = `/search?param=${this.state.searchText}`;
  };
  NavClicked = () => {
    this.setState((pre) => ({
      isclicked: !pre.isclicked
    }))
  }
  render() {
    return (
      <header>
        <div className="NavContainer">


          <nav className="navbar Main-Navbar bg-light" >
            <div className='Main-Navbar-contant '>
              <Link className="navbar-brand" to='/'><img src="./logo192.png" className='NavBar-image bg-light' alt="Logo" />

              </Link>
              {/* searc button */}

              <form onSubmit={this.handleSubmit} className="search-bar">
                <input
                  type="search"
                  name="search-movies"
                  pattern=".*\S.*"
                  placeholder='Search '
                  onChange={(e) => {
                    this.setState(() => ({ searchText: e.target.value }));
                  }}
                  style={
                    {boxShadow:"0 0 3px black inset"}
                  }
                  required
                  className="p-1  rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </form>


              <button className={
                this.state.isclicked ?
                  'Nav-Togle-Button btn btn-danger' :
                  'Nav-Togle-Button btn btn-primary'
              } onClick={this.NavClicked}>
                {this.state.isclicked ?
                  <i className=" fa-solid fa-xmark"></i> :
                  <i className=" fa-solid fa-bars"></i>
                }

              </button>
            </div>

          </nav>
        </div>

        <div className='NavBar-Hidden-containar' isvisible={`${this.state.isclicked}`} onClick={this.NavClicked}>
          <div>

            <nav className='navbar Main-Navbar p-1'>
              <Link className="navbar-brand" to='/'><img src="logo192.png" className='NavBar-image' alt="Logo" /></Link>
              <Link className="navbar-brand" to='/'><span>Home</span></Link>
              <Link className="navbar-brand" to='/favorite'><span>favorite</span></Link>

            </nav>
          </div>
        </div>

      </header>

    )
  }
}
