import slide1 from "../../assets/images/slide1.png";
import "./mainpage-card-slider.css";
const campaigns = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide campaigns"
      data-bs-ride="true"
    >
      <div class="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://www.paribucineverse.com/Files/Campaigns/nov22/nov22-campaign-detail.jpg"
            alt="Slide"
            class="camp-nav d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.paribucineverse.com/Files/Carousel/Black_Adam_vizyonda_slider.jpg"
            alt="Slide"
            class="camp-nav d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.paribucineverse.com/Files/Carousel/Paribu_Cineverse_-_Vizyonda_Slider-min.jpg"
            alt="Slide"
            class="camp-nav d-block w-100"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleIndicators"
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
        data-bs-target="#carouselExampleIndicators"
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

export default campaigns;
