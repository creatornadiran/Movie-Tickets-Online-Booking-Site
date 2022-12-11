import Navbar from "../navbar/Navbar";
import Campaigns from "./Campaigns";
import MainpageCardSlider from "./MainpageCardSlider";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Campaigns />
      <MainpageCardSlider />
    </div>
  );
};

export default Mainpage;
