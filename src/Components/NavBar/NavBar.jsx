import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isclicked:false
    }
  }
 
  NavClicked = () =>{
      this.setState((pre) =>({
        isclicked:!pre.isclicked
      }))
  }
  render() {
    return (
      <>
        <div className="NavContainer">


        <nav className="navbar Main-Navbar bg-light" >
        <div className='Main-Navbar-contant '>
          <Link className="navbar-brand" to='/'><img src="./logo192.png" className='NavBar-image bg-light' alt="Logo" />
    
          </Link>
          <button className={
            this.state.isclicked ? 
            'Nav-Togle-Button btn btn-danger' :
            'Nav-Togle-Button btn btn-primary'
          } onClick={this.NavClicked}>
          {this.state.isclicked ? 
          <i className=" fa-solid fa-xmark"></i>:
          <i className=" fa-solid fa-bars"></i>
        }
            
            </button>
        </div>
        
      </nav>
    </div>

      <div className='NavBar-Hidden-containar' isvisible = {`${this.state.isclicked}`} onClick={this.NavClicked}>
        <div>

          <nav className='navbar Main-Navbar p-1'>
          <Link className="navbar-brand" to='/'><img src="logo192.png" className='NavBar-image' alt="Logo" /></Link>
          <Link className="navbar-brand" to='/'><span>Home</span></Link>
          <Link className="navbar-brand" to='/favorate'><span>Favorate</span></Link>
          
          </nav>
        </div>
      </div>

          </>

    )
  }
}
