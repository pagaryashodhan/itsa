import React from "react";
// import "./styles.css";

import img from "../Events/img.jpg";
import img2 from "./img2.jpg";
function Events() {
  return (
    <>
      <div className="container-fluid">
        <div className="container header gy-2">
          <h2 style={{ textalign: "center" }}>Events ITSA</h2>

          <div className="row justify-content-between">
            <div className="col-md-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-interval="500"
                data-slide="true"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>The Enigma Wars</h5>
                      <p>Congratulations to all the winners</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img2}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_98vgucqb.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="row">
              <div className="lotiee col d-flex justify-content-center">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_f495l0im.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></lottie-player>
              </div>
              <div className="lotiee col d-flex justify-content-center">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_f495l0im.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
        <div className="container event-body">
          <div className="row" id="">
            <h2 style={{ textalign: "center" }} data-aos="fade-up">
              Upcoming Events
            </h2>
          </div>
          <div
            className="row justify-content-evenly mt-2 event-list"
            id="eventCardRow"
          >
            <div
              className="card card-1"
              data-aos="fade-right"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>{" "}
                    <span> Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="u" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>

            <div
              className="card card-2"
              data-aos="fade-up"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img2.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>
                    <span>Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="u" className="btn btn-light">
                  Register
                </a>
              </div>
            </div>

            <div
              className="card card-3"
              data-aos="fade-left"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>{" "}
                    <span> Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="u" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container event-body">
          <div className="row">
            <hr />
            <div className="hr">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </div>
          <div className="row">
            <h2 style={{ textalign: "center" }} data-aos="fade-up">
              Past Events
            </h2>
          </div>
          <div className="row justify-content-evenly mt-2 event-list">
            <div
              className="card card-1"
              data-aos="fade-right"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>{" "}
                    <span> Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="u" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>

            <div
              className="card card-2"
              data-aos="fade-up"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img2.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>
                    <span>Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="y" className="btn btn-light">
                  Register
                </a>
              </div>
            </div>

            <div
              className="card card-3"
              data-aos="fade-left"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top bg-light"
                width="300"
                height="150"
                src="img.jpg"
                alt="Card img cap"
              />
              <div className="card-body">
                <div className="card-timer">
                  <div className="">
                    <i className="bi bi-currency-rupee"></i>{" "}
                    <span> Rs. 1000</span>
                  </div>
                  <div className="">
                    <i className="bi bi-clock"> </i> <span>3 days left</span>
                  </div>
                </div>
                <h5 className="card-title">Praxis</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="u" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
