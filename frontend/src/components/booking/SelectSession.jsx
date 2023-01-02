import "./select-session.css";
import { FaCheckCircle } from "react-icons/fa";
import SelectSeat from "./SelectSeat";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SelectSession = () => {
  const location = useLocation();

  function getHoursAndMinutes(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  function nextSixDays() {
    const result = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      result.push(today.toISOString().slice(0, 10));
      today.setDate(today.getDate() + 1);
    }
    return result;
  }
  function getDayName(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date(date);
    return `${days[d.getDay()]} ${d.getDate()}`;
  }
  const [cinemas, setCinemas] = useState([]);
  const [days, setDays] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [seats, setSeats] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [isSeatSelectionOpen, setIsSeatSelectionOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/Cinemas").then((response) => {
      setCinemas(response.data);
    });
  }, []);

  useEffect(() => {
    setDays(nextSixDays());
  }, [selectedCinema]);

  useEffect(() => {
    axios
      .get(`/Shows/${selectedCinema}/${selectedDay}/${location.state.id}`)
      .then((response) => {
        setSessions(response.data);
      });
    {
    }
  }, [selectedDay, selectedCinema]);

  useEffect(() => {
    let hall_id = sessions[selectedSession]
      ? sessions[selectedSession].cinema_hall
      : "";
    axios.get(`/Seats/${hall_id}`).then((response) => {
      setSeats(response.data);
    });
  }, [selectedSession]);

  const handleCinemaChange = (event) => {
    setSelectedCinema(event.target.value);
    setSelectedSession("");
    setIsSeatSelectionOpen(false);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    setSelectedSession("");
    setIsSeatSelectionOpen(false);
  };

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
    setIsSeatSelectionOpen(false);
  };

  const handleCheckCircleClick = () => {
    if (selectedSession !== "") {
      setIsSeatSelectionOpen(true);
    }
  };

  return (
    <div>
      <form className="form1" name="form1" id="form1" action="/action_page.php">
        <label className="select-label">
          Select cinema name:
          <select
            className="select-label"
            value={selectedCinema}
            onChange={handleCinemaChange}
          >
            <option value="" selected="selected">
              Select
            </option>
            {cinemas.map((cinema) => (
              <option key={cinema.cinema_id} value={cinema.cinema_id}>
                {cinema.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="select-label">
          Please select movie day:
          <select
            className="select-label"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="" selected="selected">
              Select
            </option>
            {days.map((day) => (
              <option key={day} value={day}>
                {getDayName(day)}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className="select-label">
          Please select movie session:
          <select
            className="select-label"
            value={selectedSession}
            onChange={handleSessionChange}
          >
            <option value="" selected="selected">
              Select
            </option>
            {sessions.map((session, id) => (
              <option key={session} value={id}>
                {getHoursAndMinutes(session.date) +
                  " Hall: " +
                  session.cinema_hall}
              </option>
            ))}
          </select>
        </label>
        <divv>
          <FaCheckCircle
            className="tick"
            size={25}
            color="#f16775"
            onClick={handleCheckCircleClick}
          />
          {isSeatSelectionOpen && (
            <SelectSeat
              seats={seats}
              show={sessions[selectedSession]}
              movie_name={location.state.movie_name}
            />
          )}
        </divv>
      </form>
    </div>
  );
};

export default SelectSession;
