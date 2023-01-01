import "./ticket-detail.css";

const TicketDetailPage = () => {
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
         <p>Your ticket is here, Have a good time! </p> 
          <p>Film Name: aaaa</p>
          <p>Session: xxxx</p>
          <p>SeatId: yyyy</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TicketDetailPage
