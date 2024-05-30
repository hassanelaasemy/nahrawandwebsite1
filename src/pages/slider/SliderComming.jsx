import React from "react";
export default function SliderComming() {
  return (
    <section id="center" className="center_home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1 className="font_60">Entertainment Planet</h1>
              <h6 className="mt-3">
                <span className="col_red me-3">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </span>
                4.5 (Imdb) Year : 2022
                <a
                  className="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block"
                  href="#"
                >
                  Action
                </a>
              </h6>
              <p className="mt-3">
                Four waves of increasingly deadly alien attacks have left most
                of Earth in ruin. Cassie is on the run, desperately trying to
                save her younger brother.
              </p>
              <p className="mb-2">
                <span className="col_red me-1 fw-bold">Starring:</span> Eget
                Nulla Semper Porta Dapibus Diam Ipsum
              </p>
              <p className="mb-2">
                <span className="col_red me-1 fw-bold">Genres:</span> Music
              </p>
              <p>
                <span className="col_red me-1 fw-bold">Runtime:</span> 1h 32m
              </p>
              <h6 className="mt-4">
                <a className="button" href="#">
                  <i className="fa fa-play-circle align-middle me-1"></i> Watch
                  Trailer
                </a>
              </h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
