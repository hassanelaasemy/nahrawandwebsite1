import React from "react";
import { Link } from "react-router-dom";

export default function SliderComming() {
  return (
    <section id="center" class="center_home">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h1 class="font_60">Entertainment Planet</h1>
              <h6 class="mt-3">
                <span class="col_red me-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </span>
                4.5 (Imdb) Year : 2022
                <Link
                  class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block"
                  href="#"
                >
                  Action
                </Link>
              </h6>
              <p class="mt-3">
                Four waves of increasingly deadly alien attacks have left most
                of Earth in ruin. Cassie is on the run, desperately trying to
                save her younger brother.
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Starring:</span> Eget Nulla
                Semper Porta Dapibus Diam Ipsum
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Genres:</span> Music
              </p>
              <p>
                <span class="col_red me-1 fw-bold">Runtime:</span> 1h 32m
              </p>
              <h6 class="mt-4">
                <Link class="button" href="#">
                  <i class="fa fa-play-circle align-middle me-1"></i> Watch
                  Trailer
                </Link>
              </h6>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h1 class="font_60">Lorem Semper Nulla</h1>
              <h6 class="mt-3">
                <span class="col_red me-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </span>
                4.5 (Imdb) Year : 2022
                <Link
                  class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block"
                  href="#"
                >
                  Action
                </Link>
              </h6>
              <p class="mt-3">
                Four waves of increasingly deadly alien attacks have left most
                of Earth in ruin. Cassie is on the run, desperately trying to
                save her younger brother.
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Starring:</span> Eget Nulla
                Semper Porta Dapibus Diam Ipsum
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Genres:</span> Music
              </p>
              <p>
                <span class="col_red me-1 fw-bold">Runtime:</span> 1h 32m
              </p>
              <h6 class="mt-4">
                <Link class="button" href="#">
                  <i class="fa fa-play-circle align-middle me-1"></i> Watch
                  Trailer
                </Link>
              </h6>
            </div>
          </div>
          <div class="carousel-item">
            <img src="img/3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block">
              <h1 class="font_60">Eget Diam Ipsum</h1>
              <h6 class="mt-3">
                <span class="col_red me-3">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                </span>
                4.5 (Imdb) Year : 2022
                <Link
                  class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block"
                  href="#"
                >
                  Action
                </Link>
              </h6>
              <p class="mt-3">
                Four waves of increasingly deadly alien attacks have left most
                of Earth in ruin. Cassie is on the run, desperately trying to
                save her younger brother.
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Starring:</span> Eget Nulla
                Semper Porta Dapibus Diam Ipsum
              </p>
              <p class="mb-2">
                <span class="col_red me-1 fw-bold">Genres:</span> Music
              </p>
              <p>
                <span class="col_red me-1 fw-bold">Runtime:</span> 1h 32m
              </p>
              <h6 class="mt-4 mb-0">
                <Link class="button" href="#">
                  <i class="fa fa-play-circle align-middle me-1"></i> Watch
                  Trailer
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
