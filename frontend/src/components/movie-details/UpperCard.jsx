import "./UpperCard.css";
import { FaStar, FaTicketAlt } from "react-icons/fa";
const UpperCard = (props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%), url("${props.img}")`,
      }}
      className="a"
    >
      <div className="blur">
        <div>
          <img className="b" src={props.img} width="100"></img>
        </div>
        <div className="upper-details">
          <h1 style={{ marginTop: "100px" }}>{props.name}</h1>
          <p>
            <FaStar size={30} color="yellow" /> {props.score}
          </p>
          <ul className="blocks">
            <li>2D</li>
            <li>Turkish</li>
            <li>IMAX</li>
          </ul>
          <div>
            <button className="book-button">
              <div className="inside-button">
                <FaTicketAlt style={{ marginRight: "10px" }} />
                Book Ticket
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpperCard;
