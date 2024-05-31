import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SpeakersSection() {
  const [speakersData, setSpeakersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nahrawandacademy.ma/api/mobile/populare/speaker"
        );
        setSpeakersData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to group speakers into sets of four
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const speakerChunks = chunkArray(speakersData, 4);

  return (
    <section id="choice" className="pt-4 pb-5">
      <div className="container">
        <div className="row trend_1 text-start">
          <div className="col-md-6 col-6">
            <div className="trend_1l">
              <h4 className="mb-0">
                <i className="fa fa-user align-middle col_red me-1"></i>
                Popular <span className="col_red">Speakers</span>
              </h4>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="trend_1r text-end">
              <h6 className="mb-0">
                <a className="button" href="#">
                  View All
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="row trend_2 mt-4">
          <div
            id="carouselExampleCaptions3"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {speakerChunks.map((chunk, chunkIndex) => (
                <div
                  className={`carousel-item ${
                    chunkIndex === 0 ? "active" : ""
                  }`}
                  key={chunkIndex}
                >
                  <div className="trend_2i row">
                    {chunk.map((speaker) => (
                      <div className="col-md-3" key={speaker.id}>
                        <div className="trend_2im clearfix position-relative">
                          <div className="trend_2im1 clearfix">
                            <div className="grid">
                              <figure
                                className="effect-jazz mb-0"
                                style={{ borderRadius: 10 }}
                              >
                                <a href="#">
                                  <img
                                    style={{
                                      height: "300px",
                                      objectFit: "cover",
                                    }}
                                    src={`https://nahrawandacademy.ma/storage/avatars/${speaker.avatar}`}
                                    className="w-100"
                                    alt={`Speaker ${speaker.firstName} ${speaker.lastName}`}
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                          <div className="trend_2im2 clearfix position-absolute w-100 top-0">
                            <h5>
                              <a className="col_red" href="#">
                                {speaker.firstName} {speaker.lastName}
                              </a>
                            </h5>

                            <p className="mb-0">
                              {speaker.userspeaker.biographie.substring(0, 100)}
                              ...
                            </p>

                            <span className="social-iconsll">
                              <a
                                href={speaker.userspeaker.faceboock}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a
                                href={speaker.userspeaker.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa fa-instagram"></i>
                              </a>
                              <a
                                href={speaker.userspeaker.linkdin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa fa-position"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide="prev"
              style={{ visibility: "hidden" }}
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
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide="next"
              style={{ visibility: "hidden" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
