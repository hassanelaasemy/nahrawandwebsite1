import React from "react";

export default function Navbar() {
  return (
    <section id="header">
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
    </section>
  );
}
