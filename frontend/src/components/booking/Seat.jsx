import { FaCouch } from "react-icons/fa";
import "./seat.css";
const Seat = (props) => {
  console.log(props.rowNum+props.colNum);
  return (
    <div>
      <div className="seat">
        <FaCouch size={30} color="#373e98" />
    
      </div>
    </div>
    
  );
 
};

export default Seat;
