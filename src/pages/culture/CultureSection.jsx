import React from "react";
import GoogleMapsComponent from "./partial/GoogleMapsComponent";

export default function CultureSection() {
  return (
    <>
      <section id="play">
        <div className="play_m clearfix">
          <div className="container">
            <div className="row trend_1">
              <div className="col-md-12">
                <div className="trend_1l">
                  <h4 className="mb-0" style={{ textAlign: "start" }}>
                    <i className="fa fa-youtube-play align-middle col_red me-1" />{" "}
                    Top <span className="col_red">10 Playlist</span>
                  </h4>
                </div>
              </div>
            </div>
            {/*  <div className="play1 row mt-4 bg_grey pt-3 pb-3">
              <div className="col-md-9">
                <div className="play1l">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src="img/2.jpg"
                          className="w-100"
                          height={450}
                          alt="abc"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ps-0">
                <div className="play1r">
                  <div className="play1ri">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/4.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="play1ri mt-3">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/5.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="play1ri mt-3">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/6.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="play1ri mt-3">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/7.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="play1ri mt-3">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/8.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="play1ri mt-3">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img src="img/9.jpg" className="w-100" alt="abc" />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="play2 row mt-4 align-items-center">
              <div className="col-md-4 p-0">
                <div className="play2l">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src="img/31.jpg"
                          height={515}
                          className="w-100 h-100"
                          alt="abc"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-8 p-0">
                <div className="play2r  bg_grey p-4">
                  <h5>
                    <span className="col_red">BEST MOVIE OF THE MONTH :</span>{" "}
                    LIAM NEESON <span className="col_red">BLACKLIGHT</span>
                    <br />
                    THEY’RE GONNA NEED MORE MEN
                  </h5>
                  <h5 className="mt-3">Thriller</h5>
                  <hr className="line m-auto" />
                  <p className="mt-3">
                    A humble businessman with a buried past seeks justice when
                    his daughter is killed in an act of terrorism. A
                    cat-and-mouse conflict ensues with a government official,
                    whose past may hold clues to the killers' identities.
                  </p>
                  <div className="play2ri row mt-4 ">
                    <div className="col-md-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473115.337456489!2d-9.789994701988649!3d31.77828021081976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651c58d%3A0xd9d39381c42cffc3!2sMorocco!5e0!3m2!1sen!2sma!4v1717157916021!5m2!1sen!2sma"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
