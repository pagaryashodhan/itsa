import React from "react";
import "./facultyInfo.css";

const facultyCard = ({
  imgUrl,
  name,
  designation,
  linkedInUrl,
  twitterUrl,
  websiteUrl,
}) => {
  const openInNewTab = (url) => {
    if (url !== "") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <>
      <div
        className="card text-center"
        id="faculty0-card"
        style={{ width: "18rem" }}
      >
        <img src={imgUrl} className="card-img-top" height={"256 rem"} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="">{designation}</p>
          <p className="card-text">
            Description of the faculty member will be displayed here
          </p>
          <button
            type="button"
            className="btn btn-link pl-2"
            onClick={() => openInNewTab(linkedInUrl)}
          >
            <i
              className="bi bi-linkedin bi-2x"
              id="button-linkedin"
              aria-hidden="true"
            ></i>
          </button>
          <button
            type="button"
            className="btn btn-twitt "
            onClick={() => openInNewTab(twitterUrl)}
          >
            <i
              className="bi bi-twitter  bi-2x"
              id="button-twitter"
              aria-hidden="true"
            ></i>
          </button>
          <button type="button" className="btn btn-link ">
            <i
              className="bi bi-globe bi-2x"
              id="button-website"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default facultyCard;
