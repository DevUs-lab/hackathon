import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-ride="carousel"   // auto start
        data-bs-interval="4000"   // 4 seconds per slide
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://www.savethechildren.org.nz/assets/the-issues/child-poverty/hero-child-poverty.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              <h5 className="fade-in" style={{ animationDelay: "0.5s" }}>
                Help Poor Childrens
              </h5>
              <h2 className="fw-bold fade-in" style={{ animationDelay: "1s" }}>
                Only From <span>$10</span>
              </h2>
              <p className="fade-in" style={{ animationDelay: "1.5s" }}>
                We Are Non-Profit Charity & NGO Organization.
              </p>
              <a href="#" className="btn btn-primary fade-in" style={{ animationDelay: "2s" }}>
                Getting Started
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              <h2 className="fw-bold fade-in" style={{ animationDelay: "0.5s" }}>
                Education for Every Child
              </h2>
              <p className="fade-in" style={{ animationDelay: "1s" }}>
                Together we can break the cycle of poverty.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/06/48/66/24/360_F_648662409_MsLXxT4K5opBK83U4oUCHVV8A1hgYWma.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              <h2 className="fw-bold fade-in" style={{ animationDelay: "0.5s" }}>
                Make a Difference Today
              </h2>
              <p className="fade-in" style={{ animationDelay: "1s" }}>
                Your small support can change lives.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Controls */}
        <button
          className="custom-carousel-btn prev-btn"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          &#10094;
        </button>

        <button
          className="custom-carousel-btn next-btn"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Hero;
