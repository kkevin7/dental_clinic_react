import React from "react";
import { Router, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        {/* <!-- Preloader --> */}
        {/* <div id="preloader">
          <div className="preload-content">
            <div id="dento-load"></div>
          </div>
        </div> */}
        {/* <!-- ***** Header Area Start ***** --> */}
        <header className="header-area">
          {/* <!-- Top Header Area --> */}
          <div className="top-header-area navbar-color">
            <div className="container h-100">
              <div className="row h-100 align-items-center">

                {/* <!-- Top Header Social Info --> */}
                <div className="col-6 col-md-3 col-lg-4 ">
                  <div className="top-header-social-info text-left">
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>

                {/* <!-- Top header buttons --> */}
                <div className="col-6 col-md-9 col-lg-8">
                  <div className="top-header-content text-right">
                    <button type="button" className="btn dental-btn english-btn">English</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Top Header End --> */}

          {/* <!-- Main Header Start --> */}
          <div className="main-header-area">
            <div className="classy-nav-container breakpoint-off">
              <div className="container">
                {/* <!-- Classy Menu --> */}
                <nav className="classy-navbar justify-content-between" id="dentoNav">

                  {/* <!-- Logo --> */}
                  <a className="nav-brand" href="index.html"><img src="./img/core-img/logo.png" alt="" /></a>

                  {/* <!-- Navbar Toggler --> */}
                  <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                  </div>

                  {/* <!-- Menu --> */}
                  <div className="classy-menu">

                    {/* <!-- Close Button --> */}
                    <div className="classycloseIcon">
                      <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                    </div>

                    {/* <!-- Nav Start --> */}
                    <div className="classynav">
                      <ul id="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><a href="index.html">- Home</a></li>
                            <li><a href="about.html">- About Us</a></li>
                            <li><a href="service.html">- Service</a></li>
                            <li><a href="pricing.html">- Pricing</a></li>
                            <li><a href="blog.html">- Blog</a></li>
                            <li><a href="blog-details.html">- Blog Details</a></li>
                            <li><a href="contact.html">- Contact</a></li>
                            <li><a href="#">- Dropdown</a>
                              <ul className="dropdown">
                                <li><a href="#">- Dropdown Item</a></li>
                                <li><a href="#">- Dropdown Item</a>
                                  <ul className="dropdown">
                                    <li><a href="#">- Even Dropdown</a></li>
                                    <li><a href="#">- Even Dropdown</a></li>
                                    <li><a href="#">- Even Dropdown</a></li>
                                    <li><a href="#">- Even Dropdown</a></li>
                                  </ul>
                                </li>
                                <li><a href="#">- Dropdown Item</a></li>
                                <li><a href="#">- Dropdown Item</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="#">Blog</a>
                          <ul className="dropdown">
                            <li><a href="blog.html">- Blog</a></li>
                            <li><a href="blog-details.html">- Blog Details</a></li>
                          </ul>
                        </li>
                        <li><a href="./contact.html">Contact</a></li>
                      </ul>
                    </div>
                    {/* <!-- Nav End --> */}
                  </div>

                  {/* <!-- Appoiment Button --> */}
                  <a href="#" className="btn dento-btn booking-btn">Asignar una cita</a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- ***** Header Area End ***** --> */}
      </div>
    );
  }
}

export default Header;
