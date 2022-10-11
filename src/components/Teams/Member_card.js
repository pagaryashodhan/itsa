import React from "react";
import "./Team.css";
const Card = ({ name, position, imageUrl, linkedInUrl }) => {
  return (
    <div className="container" data-aos="fade-right">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team" id="our-team" style={{ width: "18rem" }}>
            <div className="picture">
              <img className="img-fluid" src={imageUrl} alt="Member Img" />
            </div>
            <div className="team-content">
              <h3 className="name">{name}</h3>
              <h4 className="title">{position}</h4>
            </div>
            <button
              type="button"
              className="btn btn-link pl-2"
              onClick={() =>
                window.open(linkedInUrl, "_blank", "noopener,noreferrer")
              }
            >
              <i
                className="bi bi-linkedin bi-2x"
                id="button"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
