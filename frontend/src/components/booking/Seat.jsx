import { FaCouch } from "react-icons/fa";
import { useState } from "react";
import "./seat.css";

 const Seat = (props) => {
  const [color, setColor] = useState(props.status === "sold" ? "red" : "#373e98");
  const [status, setStatus] = useState(props.status);

  const handleClick = () => {
    if (props.status === "available") {
      setColor(color === "#373e98" ? "#fee36e" : "#373e98");
      setStatus(status === "available" ? "selected" : "available");
    
      }
  };

   console.log(props.cinema_seatid);
  return (
    <div>
      <div className="seat">
        <FaCouch size={30}  color={color} onClick={handleClick}/>
    
      </div>
    </div>
    
  );
 
};

export default Seat;
