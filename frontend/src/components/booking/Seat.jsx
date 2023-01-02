import { FaCouch } from "react-icons/fa";
import { useState } from "react";
import "./seat.css";

const Seat = (props) => {
  const isbooked = props.booked_shows.includes(props.show_id);
  const [color, setColor] = useState(isbooked ? "red" : "#373e98");
  const [status, setStatus] = useState(isbooked ? 1 : 0);
  const handleClick = () => {
    if (!isbooked) {
      setColor(color === "#373e98" ? "#fee36e" : "#373e98");
      setStatus(status === 0 ? 2 : 0);
      props.onSelect();
      if (status === 2) {
        props.removeSelection();
      }
    }
  };
  return (
    <div className={`${status}`}>
      <div className="seat">
        <FaCouch size={30} color={color} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Seat;
