import { useState } from "react";
import "./mainpage-card-slider.css";
import MainpageCardSlider from "./MainpageCardSlider";
const MoviesAndComingmovies = () => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active film-options"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Movies In Theaters
          </button>
          <button
            className="nav-link film-options"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Coming Soon
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <MainpageCardSlider id={1} inTheatre={true} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <MainpageCardSlider id={2} inTheatre={false} />
        </div>
      </div>
    </div>
  );
};
/*const MoviesAndComingmovies = () => {
  const[page,setpage]=useState(0);
  return (
    <div>
    <nav>
    <div className="nav nav-tabs tabs" id="nav-tab" role="tablist">
      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={setpage(0)}>Movies In Theaters</button>
      <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={setpage(1)}>Coming Soon</button>
      
    </div>
  </nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0"><MainpageCardSlider /></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"><MainpageCardSlider/></div>
  
</div>
    </div>
  );
};*/

export default MoviesAndComingmovies;
