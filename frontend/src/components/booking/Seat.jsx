import { FaCouch } from "react-icons/fa";
import { useState } from "react";
import "./seat.css";

 const Seat = (props) => {
  const [color, setColor] = useState(props.state === "sold" ? "red" : "#373e98");
  const [state, setState] = useState(props.state);

  const handleClick = () => {
    if (props.state === "available") {
      setColor(color === "#373e98" ? "#fee36e" : "#373e98");
      setState(state === "available" ? "selected" : "available");
    
      }
  };

  console.log(state+ props.rowNum);
  return (
    <div>
      <div className="seat">
        <FaCouch size={30}  color={color} onClick={handleClick}/>
    
      </div>
    </div>
    
  );
 
};

export default Seat;
