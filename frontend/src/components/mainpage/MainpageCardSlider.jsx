import slide1 from "../../assets/images/slide1.png";
import slide from "../../assets/images/slide.png";
import "./mainpage-card-slider.css";
import { Link, useNavigate } from "react-router-dom";
const MainpageCardSlider = () => {
  const navigate = useNavigate();
  const toFilmA = (fname, src, scr, tgs, abt, acts, dur) => {
    navigate("/film-details", {
      state: {
        id: 1,
        name: fname,
        img: src,
        score: scr,
        tags: tgs,
        about: abt,
        actors: acts,
        duration: dur,
      },
    });
  };
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <div class="card ">
              <img
                src="https://cdn.liveaplus.com/uploads/2014/08/TheShawshankRedemption.1-300x226.jpg"
                alt="Slide"
                class="card-img-top "
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#/a" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOWE1MWE3ZDktOThlZS00ZmRiLWE4ZGEtNWJkMTVlZjdhZDIyXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg"
                alt="Slide"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a
                  onClick={() => {
                    toFilmA(
                      "The Godfather",
                      "https://m.media-amazon.com/images/M/MV5BOWE1MWE3ZDktOThlZS00ZmRiLWE4ZGEtNWJkMTVlZjdhZDIyXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg",
                      "9.5",
                      ["2D", "Turkish", "IMAX"],
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      ["Ali", "Ahmet", "Mehmet"],
                      "2h 40min"
                    );
                  }}
                  class="btn btn-primary"
                >
                  Go somewheree
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img
                src="https://m.media-amazon.com/images/I/51r4i5VQK3L._AC_SY1000_.jpg"
                alt="Slide"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a
                  onClick={() => {
                    toFilmA(
                      "The Batman",
                      "https://m.media-amazon.com/images/I/51r4i5VQK3L._AC_SY1000_.jpg",
                      "9.7",
                      ["3D", "English", "IMAX"],
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      ["Hasan", "Ahmet", "Mehmet"],
                      "1h 40min"
                    );
                  }}
                  class="btn btn-primary"
                >
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img
                src="data:image/jpeg;base64,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"
                alt="Slide"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper">
            <div class="card">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card d-none d-md-block">
              <img src={slide1} alt="Slide" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon prev-button"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon next-button"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainpageCardSlider;
