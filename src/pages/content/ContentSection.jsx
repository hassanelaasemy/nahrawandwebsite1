import React from "react";
import FormationComponent from "./partial/FormationComponent";
import PodcastComponent from "./partial/PodcastComponent";
import QuicklyComponent from "./partial/QuicklyComponent";

export default function ContentSection() {
  return (
    <>
      <section id="popular" className="pt-4 pb-5 bg_grey">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-12">
              <div className="trend_1l">
                <h4 className="mb-0" style={{ textAlign: "justify" }}>
                  <i className="fa fa-youtube-play align-middle col_red me-1" />{" "}
                  Trending <span className="col_red">Content</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row popular_1 mt-4">
            <ul className="nav nav-tabs  border-0 mb-0">
              <li className="nav-item">
                <a
                  href="#home"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link active"
                >
                  <span className="d-md-block">FORMATION</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#profile"
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  className="nav-link"
                >
                  <span className="d-md-block">PODCAST</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#settings"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <span className="d-md-block">QUICKLY</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="popular_2 row mt-4">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <FormationComponent />
              </div>
              <div className="tab-pane" id="profile">
                <PodcastComponent />
              </div>
              <div className="tab-pane" id="settings">
                <QuicklyComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
