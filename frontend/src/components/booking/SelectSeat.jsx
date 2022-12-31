import React from "react";
import Seat from "./Seat";
import "./select-seat.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SelectSeat = () => {
  const navigate = useNavigate();
  const toPaymentPage = () => {
    navigate("/film-details/film-name/book-ticket/payment");
  };

  const [seats, setSeats] = React.useState(null);
  React.useEffect(() => {
    axios.get("/api/CinemaSeats/").then((response) => {
      setSeats(response.data);
    });
  }, []);
  if (!seats) return null;
  return (
    <div>
      {" "}
      <div className="seats">
        {seats.map((seat) => (
          <Seat
            cinema_seatid={seat.cinema_seatid}
            status={seat.status}
            row_no={seat.row_no}
            col_no={seat.col_no}
            cinema_hallID={seat.cinema_hallID}
          />
        ))}
      </div>
      <button
        type="button"
        className="btn btn-primary get-ticket "
        onClick={toPaymentPage}
      >
        Get Ticket
      </button>
    </div>
  );
};

export default SelectSeat;
