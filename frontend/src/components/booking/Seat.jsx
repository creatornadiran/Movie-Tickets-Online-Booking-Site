import { FaCouch } from "react-icons/fa";
import { useState } from "react";
import "./seat.css";

 const Seat = (props) => {
  const [color, setColor] = useState(props.is_booked ? "red" : "#373e98");
  const [status , setStatus] = useState(props.is_booked?1:0);

  const handleClick = () => {
    if (!props.is_booked) {
      setColor(color === "#373e98" ? "#fee36e" : "#373e98");
      setStatus(status === 0 ? 2 : 0);
    
      }
  };
  console.log(props);
  return (
    <div>
      <div className="seat">
        <FaCouch size={30}  color={color} onClick={handleClick}/>
    
      </div>
    </div>
    
  );
 
};

export default Seat;
