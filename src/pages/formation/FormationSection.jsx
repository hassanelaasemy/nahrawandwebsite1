import React from "react";
import CardFormationComponent from "./partial/CardFormation";


export default function FormationSection() {
  return (
    <>
      <section id="trend" className="pt-4 pb-5">
        <div className="container">
          <div className="row trend_1">
            <div className="col-md-6 col-6">
              <div className="trend_1l">
                <h4 className="mb-0" style={{textAlign:'justify'}}>
                  <i className="fa fa-youtube-play align-middle col_red me-1" />{" "}
                  Latest <span className="col_red">Formation</span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="trend_1r text-end">
                <h6 className="mb-0">
                  <a className="button" href="#">
                    {" "}
                    View All
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <CardFormationComponent />
        </div>
      
      </section>
    </>
  );
}
