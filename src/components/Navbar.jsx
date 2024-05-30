import React from "react";

export default function Navbar() {
  return (
    <>
      <section id="top">
        <div className="container">
          <div className="row top_1">
            <div className="col-md-3">
              <div className="top_1l pt-1">
                <h3 className="mb-0">
                  <a className="text-white" href="index.html">
                    <i className="fa fa-video-camera col_red me-1" /> Planet
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-md-5">
            {/*   <div className="top_1m">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-black"
                    placeholder="Search Site..."
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn text-white bg_red rounded-0 border-0"
                      type="button"
                    >
                      Search
                    </button>
                  </span>
                </div>
              </div> */}
            </div>
            <div className="col-md-4">
              <div className="top_1r text-end">
                <ul className="social-network social-circle mb-0">
                  <li>
                    <a href="#" className="icoRss" title="Rss">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoTwitter" title="Twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoGoogle" title="Google +">
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="header">
        <nav class="navbar navbar-expand-md navbar-light" id="navbar_sticky">
          <div class="container">
            <a class="navbar-brand text-white fw-bold" href="index.html">
              <i class="fa fa-video-camera col_red me-1"></i> Planet
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul
                    class="dropdown-menu drop_1"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item border-0" href="blog_detail.html">
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="team.html">
                    Team
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    class="dropdown-menu drop_1"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="services.html">
                        Services
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="team.html">
                        Team
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item border-0" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section> */}
    </>
  );
}
