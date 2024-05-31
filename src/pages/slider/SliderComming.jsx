import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SliderComming() {
  const [loading, setLoading] = useState(true);
  const [commingsoon, setCommingsoon] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://nahrawandacademy.ma/api/mobile/Cour/Formation`
      );
      setCommingsoon(response.data.contentFormation || []);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data commingsoon:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getImageSource = (item) => {
    const { cours_type, cours_podcast, cours_conference, cours_formation } =
      item;
    let imageUri = "";
    switch (cours_type) {
      case "podcast":
        imageUri = cours_podcast?.image;
        break;
      case "conference":
        imageUri = cours_conference?.image;
        break;
      default:
        imageUri = cours_formation?.image;
    }
    return `https://nahrawandacademy.ma/storage/upload/cour/image/${imageUri}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="center" className="center_home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {commingsoon.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {commingsoon.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={getImageSource(item)}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-md-block">
                <h1 className="font_60">{item.title}</h1>
                <h6 className="mt-3">
                  <span className="col_red me-3">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </span>
                  {`${new Date(item.created_at).getFullYear()}-${(
                    new Date(item.created_at).getMonth() + 1
                  )
                    .toString()
                    .padStart(2, "0")}-${new Date(item.created_at)
                    .getDate()
                    .toString()
                    .padStart(2, "0")}`}
                </h6>
                <p className="mt-3">{item.description}</p>

                <p className="mb-2">
                  <span className="col_red me-1 fw-bold">Category:</span>
                  {item.category.category_name}
                </p>
                <p className="mb-2">
                  <span className="col_red me-1 fw-bold">Tags:</span>{" "}
                  {item.tags.join(", ")}
                </p>
                <h6 className="mt-4 mb-0">
                  <a
                    className="button"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-play-circle align-middle me-1" /> Watch
                    Trailer
                  </a>
                </h6>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
    </section>
  );
}
