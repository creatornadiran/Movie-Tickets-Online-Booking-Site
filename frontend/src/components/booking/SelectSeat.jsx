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
            cinema_seat_id={seat.cinema_seat_id}
            is_booked={seat.is_booked}
            row_no={seat.row_no}
            col_no={seat.col_no}
            cinema_hall_id={seat.cinema_hall}
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
