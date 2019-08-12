import React from 'react';
import { Router, Link } from 'react-router-dom';

function App() {
  return (
    <div class="App">
      {/* <!-- ***** Header Area Start ***** --> */}
  <header class="header-area">
    {/* <!-- Top Header Area --> */}
    <div class="top-header-area navbar-color">
      <div class="container h-100">
        <div class="row h-100 align-items-center">

          {/* <!-- Top Header Social Info --> */}
          <div class="col-6 col-md-3 col-lg-4 ">
            <div class="top-header-social-info text-left">
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>

          {/* <!-- Top header buttons --> */}
          <div class="col-6 col-md-9 col-lg-8">
            <div class="top-header-content text-right">
              <button type="button" class="btn dental-btn english-btn">English</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Top Header End --> */}

    {/* <!-- Main Header Start --> */}
    <div class="main-header-area">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          {/* <!-- Classy Menu --> */}
          <nav class="classy-navbar justify-content-between" id="dentoNav">

            {/* <!-- Logo --> */}
            <a class="nav-brand" href="index.html"><img src="./img/core-img/logo.png" alt=""/></a>

            {/* <!-- Navbar Toggler --> */}
            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>

            {/* <!-- Menu --> */}
            <div class="classy-menu">

              {/* <!-- Close Button --> */}
              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>

              {/* <!-- Nav Start --> */}
              <div class="classynav">
                <ul id="nav">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Pages</a>
                    <ul class="dropdown">
                      <li><a href="index.html">- Home</a></li>
                      <li><a href="about.html">- About Us</a></li>
                      <li><a href="service.html">- Service</a></li>
                      <li><a href="pricing.html">- Pricing</a></li>
                      <li><a href="blog.html">- Blog</a></li>
                      <li><a href="blog-details.html">- Blog Details</a></li>
                      <li><a href="contact.html">- Contact</a></li>
                      <li><a href="#">- Dropdown</a>
                        <ul class="dropdown">
                          <li><a href="#">- Dropdown Item</a></li>
                          <li><a href="#">- Dropdown Item</a>
                            <ul class="dropdown">
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
                    <ul class="dropdown">
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
            <a href="#" class="btn dento-btn booking-btn">Asignar una cita</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
      </div>
  );
}

export default App;
