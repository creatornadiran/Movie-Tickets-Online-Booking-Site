import "./UpperCard.css";
import { FaStar, FaTicketAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const UpperCard = (props) => {
  const tagList = props.tags.split(", ");
  const navigate = useNavigate();
  const toReservation = () => {
    navigate(`/film-details/film-name/book-ticket`, {
      state: {
        id: props.movie_id,
        movie_name: props.name,
      },
    });
  };
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
          <h3 style={{ marginTop: "100px" }}>{props.name}</h3>
          <div className="about-div">
            <p>Score:</p>
            <p>
              <FaStar size={30} color="yellow" /> {props.score}/10
            </p>
          </div>
          <div className="about-div">
            <p>Genres:</p>
            <ul className="genres">
              {tagList.map(function (item, id) {
                return (
                  <li className="genre-li" key={id}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="about-div">
            <p>Duration:</p>
            <p>{props.duration}</p>
          </div>
          <div>
            {props.in_theatre ? (
              <button className="book-button">
                <div className="inside-button" onClick={toReservation}>
                  <FaTicketAlt style={{ marginRight: "10px" }} />
                  Book Ticket
                </div>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpperCard;
