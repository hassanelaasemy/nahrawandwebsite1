import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData() {
  const response = await axios.get("https://nahrawandacademy.ma/api/mobile/Cour/Formation");
  return response.data.contentFormation;
}

function CardFormationComponent() {

  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedData.push(data.slice(i, i + 4));
  }

  return (
    <div className="row trend_2 mt-4">
      <div
        id="carouselExampleCaptions1"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {groupedData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {groupedData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
            >
              <div className="trend_2i row">
                {group.map((item, index) => (
                  <div key={index} className="col-md-3 col-6">
                    <div className="trend_2im clearfix position-relative">
                      <div className="trend_2im1 clearfix">
                        <div className="grid">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src={
                                  `https://nahrawandacademy.ma/storage/upload/cour/image/` +
                                  item.cours_formation.image
                                }
                                className="w-100"
                                alt={item.title}
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="trend_2im2 clearfix text-center position-absolute w-100 top-0">
                        <span className="fs-1">
                          <a className="col_red" href="#">
                            <i className="fa fa-youtube-play" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="trend_2ilast bg_grey p-3 clearfix">
                      <h5>
                        <a className="col_red" href="#">
                          ...{item.title.substring(0 , 29)}
                        </a>
                      </h5>
                      <p className="mb-2">...{item.description.substring(0 , 30)}</p>
                      <span className="col_red">
                        {[...Array(5)].map((_, starIndex) => (
                          <i key={starIndex} className="fa fa-star" />
                        ))}
                      </span>
                      <p className="mb-0">1 View</p>
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
          data-bs-target="#carouselExampleCaptions1"
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
          data-bs-target="#carouselExampleCaptions1"
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
  );
}

export default function CardFormation() {
  return (
    <>
      <CardFormationComponent />
    </>
  );
}
