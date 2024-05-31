import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData() {
  const response = await axios.get(
    "https://nahrawandacademy.ma/api/mobile/Cour/Podcast"
  );

  return response.data.contentPodcast;
}

export default function PodcastComponent() {
  const [data, setData] = useState([]);
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

  return (
    <div className="popular_2i row gapRow">
      {data.map((item, index) => (
        <div className="col-md-6" key={index}>
          <div className="popular_2i1 row ">
            <div className="col-md-4 col-4">
              <div className="popular_2i1lm position-relative clearfix">
                <div className="popular_2i1lm1 clearfix">
                  <div className="grid">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src={
                            `https://nahrawandacademy.ma/storage/upload/cour/image/flex/` +
                            item.cours_podcast.image_flex
                          }
                          className="w-100"
                          alt={item.title}
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="popular_2i1lm2 position-absolute top-0 w-100 text-center clearfix">
                  <ul>
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fa fa-link col_red" />
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fa fa-search col_red" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-8">
              <div className="popular_2i1r">
                <h5>
                  <a className="col_red" href="#">
                    {item.title}
                  </a>
                </h5>
                <h6>{item.genre}</h6>
                <h6>Year: {new Date(item.created_at).getFullYear()}</h6>
                <p>{item.description}</p>
                <h6 className="mb-0">
                  <a className="button" href="#">
                    More Info - Trailer
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
