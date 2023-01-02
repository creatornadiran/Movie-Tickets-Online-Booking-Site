import React from "react";
import Seat from "./Seat";
import "./select-seat.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const SelectSeat = (props) => {
  let { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const toPaymentPage = () => {
    if (selectedSeats.length === 0) {
      alert("Please select a seat.");
      return;
    }
    if (user) {
      navigate("/film-details/film-name/book-ticket/payment", {
        state: {
          selectedSeats: selectedSeats,
          totalAmount: totalAmount,
          show: props.show,
          movie_name: props.movie_name,
        },
      });
    } else {
      navigate("/log-in");
    }
  };

  const price = props.show.show_price;
  const [seats, setSeats] = React.useState(props.seats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(price * selectedSeats.length);
  }, [selectedSeats]);

  const removeSelection = (seat) => {
    const index = selectedSeats.indexOf(seat);
    setSelectedSeats([
      ...selectedSeats.slice(0, index),
      ...selectedSeats.slice(index + 1),
    ]);
  };
  if (!seats) return null;
  return (
    <div >
      <div className="seats">
        {seats.map((seat) => (
          <Seat
            onSelect={() => setSelectedSeats([...selectedSeats, seat])}
            cinema_seat_id={seat.cinema_seat_id}
            booked_shows={seat.booked_shows}
            row_no={seat.row_no}
            col_no={seat.col_no}
            cinema_hall_id={seat.cinema_hall}
            show_id={props.show.show_id}
            removeSelection={() => removeSelection(seat)}
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
