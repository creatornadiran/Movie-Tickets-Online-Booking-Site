import "./ticket-detail.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const TicketDetailPage = (props) => {
  function getSeatIds(seats) {
    return seats.map((seat) => seat.cinema_seat_id).join(", ");
  }
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const location = useLocation();
  const seatIDs = getSeatIds(location.state.selectedSeats);
  let { authTokens } = useContext(AuthContext);

  let getTickets = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/CreateTicket/${location.state.totalAmount}/${seatIDs}/${location.state.show.show_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();

    if (response.status === 201) {
      setTicket(data);
    }
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div>
      <div className="card cardd">
        <img
          src="https://img.freepik.com/premium-vector/vector-drawing-cinema-ticket-cinema-ticket-icon_606226-42.jpg?w=2000"
          className="card-img-top ticket-png"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text ticket-text">
            {console.log(ticket)}
            <p>Your ticket is here, Have a good time! </p>
            <p>Movie Name: {location.state.movie_name}</p>
            <p>Session: {location.state.show.show_id}</p>
            <p>Seat IDs: {ticket ? ticket.seats : ""}</p>
            <p>Ticket ID: {ticket ? ticket.ticket_id : ""}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailPage;
