import "./mainpage-card-slider.css";
import MainpageCardSlider from "./MainpageCardSlider";
const MoviesAndComingmovies = () => {
  return (
    <div>
     <nav>
  <div class="nav nav-tabs tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Movies In Theaters</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Coming Soon</button>
    
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><MainpageCardSlider/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><MainpageCardSlider/></div>
  
</div>
    </div>
  );
};

export default MoviesAndComingmovies;
