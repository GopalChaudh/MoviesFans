import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
                <footer className="bg-white">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="./logo.png" alt="" width="180" className="mb-3" />
          <p className="font-italic text-muted">This Is The Web App i Have Madded To Test My React Skills And To InHance Them I Have Used IMDB To Make This App In existence !</p>
          <ul className="footer-Contect-info-Container">
                <li>
                    <a href="https://www.facebook.com/kailash.chaudhary.108889/">
                        <i className="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gopal_chaudhary__/"><i className="fab fa-instagram icon"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gopal-chaudhary-40862224b/"><i className="fab fa-linkedin-in icon"></i></a></li>
                <li>
                    <a href="https://github.com/GopalChaudh"><i className="fa-brands fa-github-alt" style={{color:"black"}}></i></a></li>

            </ul>
        </div>
       
      </div>
    </div>

    <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2023 Gopal_chaudhary</p>
      </div>
    </div>
  </footer>
           
        )
    }
}
