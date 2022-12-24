import slide1 from "../../assets/images/slide1.png";
import slide from "../../assets/images/slide.png";
import "./mainpage-card-slider.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
const MainpageCardSlider = () => {
  const navigate = useNavigate();
  const toFilmA = (fname, src, scr, tgs, abt, acts, dur) => {
    navigate(`/film-details/${fname}`, {
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
// dbden hangi sayfada olduğumuzu cek, const MainpageCardSlider = ({info})  info=hangi sayfa
  return (
    
   <div>
     
   <div
   id="carouselExampleControls"
   class="carousel slide "
   data-ride="carousel"
 > 
   <div class="carousel-inner ">
     <div class="carousel-item active ">
       <div class="cards-wrapper ">
         <Card
           title="Ahmet"
           img="https://cdn.liveaplus.com/uploads/2014/08/TheShawshankRedemption.1-300x226.jpg"
           function={() => {
             toFilmA(
               "The Batman",
               "https://m.media-amazon.com/images/I/51r4i5VQK3L._AC_SY1000_.jpg",
               "9.7",
               ["3D", "English", "IMAX"],
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
               [
                 { image: "", name: "asd", roleName: "xcv" },
                 { image: "", name: "ads", roleName: "cxz" },
                 { image: "", name: "dsa", roleName: "xcz" },
               ],
               "1h 40min"
             );
           }}
         />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
       </div>
     </div>
     <div class="carousel-item">
       <div class="cards-wrapper">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
       </div>
     </div>
     <div class="carousel-item">
       <div class="cards-wrapper">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
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
   
 </div></div>
  );
};

export default MainpageCardSlider;
