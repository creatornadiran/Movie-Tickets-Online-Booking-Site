import React from 'react'
import Seat from './Seat';
import "./select-seat.css";

const SelectSeat = () => {
  
    const rows = [];
    const cols = [];
    const seats = [];
    for (let i = 1; i <= 7; i++) {
      rows.push(String.fromCharCode(65 + i - 1));
    }
    for (let i = 1; i <= 15; i++) {
      cols.push(i);
    }
    console.log(cols);
   
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        seats.push({ rowNum: rows[i], colNum: cols[j], state: "available" });
      }
    }
    
    return (
      <div className="seats">
     {seats.map((seat) => (
        <Seat
        key={seat.rowNum + seat.colNum}
        rowNum={seat.rowNum}
        colNum={seat.colNum}
        state={seat.state}
      />
      ))}
    </div>
    )
  }

export default SelectSeat;
