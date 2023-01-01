import "./payment-page.css";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const navigate = useNavigate();
  const toTicketDetail = () => {
    navigate("/ticket-detail");
  };

  return (
    <div>
      <div class="padding">
        <div class="row">
          <div class="col-sm-6">
            <div class="card payment ">
              <div class="card-header payment-header">
                <strong>Credit Card</strong>
                <p></p>
                <small>enter your card details</small>
              </div>
              <div class="card-body payment-body">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group-payment">
                      <label for="name">Name</label>
                      <input
                        class="form-control control-formm"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group-payment">
                      <label for="ccnumber">Credit Card Number</label>

                      <div class="input-group">
                        <input
                          class="form-control control-formm"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          autocomplete="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="form-group-payment col-sm-4">
                    <label for="ccmonth">Month</label>
                    <select class="form-control control-formm" id="ccmonth">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div class="form-group-payment col-sm-4">
                    <label for="ccyear">Year</label>
                    <select class="form-control control-formm" id="ccyear">
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group-payment">
                      <label for="cvv">CVV/CVC</label>
                      <input
                        class="form-control control-formm"
                        id="cvv"
                        type="text"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  class="btn btn-sm btn-success float-right"
                  type="submit" onClick={toTicketDetail}
                >
                  <i class="mdi mdi-gamepad-circle"></i> Get Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
