import slide1 from "../../assets/images/slide1.png";
import "./mainpage-card-slider.css";
const campaigns = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide campaigns"
      data-bs-ride="true"
    >
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators "
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators "
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.paribucineverse.com/Files/Campaigns/nov22/nov22-campaign-detail.jpg"
            alt="Slide"
            className="camp-nav d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.paribucineverse.com/Files/Carousel/Black_Adam_vizyonda_slider.jpg"
            alt="Slide"
            className="camp-nav d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.paribucineverse.com/Files/Carousel/Paribu_Cineverse_-_Vizyonda_Slider-min.jpg"
            alt="Slide"
            className="camp-nav d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon prev-button"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon next-button"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default campaigns;
