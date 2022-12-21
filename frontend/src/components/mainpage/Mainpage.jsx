import Navbar from "../navbar/Navbar";
import Campaigns from "./Campaigns";
import MainpageCardSlider from "./MainpageCardSlider";
import Login from "../login-page/Login";
import MoviesAndComingmovies from "./MoviesAndComingmovies";
const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Campaigns />
      <MoviesAndComingmovies/>
      
    </div>
  );
};

export default Mainpage;
