import "./select-session.css";
import { FaCheckCircle } from "react-icons/fa";
const SelectSession = () => {
  const subjectObject = {
    İzmirpark: {
      Monday: ["12.15", "16.30", "18.45", "21.30"],
      Tuesday: ["11.55", "14.45", "17.50", "20.30"],
      Wednesday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
      Thursday: ["12.00", "14.30", "17.40", "21.00"],
      Friday: ["11.45", "13.55", "16.20", "18.40", "21.10"],
      Saturday: ["11.55", "14.45", "17.50", "20.30"],
      Sunday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
    },
    "Konak Pier": {
      Monday: ["12.15", "16.30", "18.45", "21.30"],
      Tuesday: ["11.55", "14.45", "17.50", "20.30"],
      Wednesday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
      Thursday: ["12.00", "14.30", "17.40", "21.00"],
      Friday: ["11.45", "13.55", "16.20", "18.40", "21.10"],
      Saturday: ["11.55", "14.45", "17.50", "20.30"],
      Sunday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
    },
    "Forum Bornova": {
      Monday: ["12.15", "16.30", "18.45", "21.30"],
      Tuesday: ["11.55", "14.45", "17.50", "20.30"],
      Wednesday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
      Thursday: ["12.00", "14.30", "17.40", "21.00"],
      Friday: ["11.45", "13.55", "16.20", "18.40", "21.10"],
      Saturday: ["11.55", "14.45", "17.50", "20.30"],
      Sunday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
    },
    "Agora Avm": {
      Monday: ["12.15", "16.30", "18.45", "21.30"],
      Tuesday: ["11.55", "14.45", "17.50", "20.30"],
      Wednesday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
      Thursday: ["12.00", "14.30", "17.40", "21.00"],
      Friday: ["11.45", "13.55", "16.20", "18.40", "21.10"],
      Saturday: ["11.55", "14.45", "17.50", "20.30"],
      Sunday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
    },
    "Kipa Avm": {
      Monday: ["12.15", "16.30", "18.45", "21.30"],
      Tuesday: ["11.55", "14.45", "17.50", "20.30"],
      Wednesday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
      Thursday: ["12.00", "14.30", "17.40", "21.00"],
      Friday: ["11.45", "13.55", "16.20", "18.40", "21.10"],
      Saturday: ["11.55", "14.45", "17.50", "20.30"],
      Sunday: ["11.00", "13.00", "15.40", "18.30", "21.00"],
    },
  };
  window.onload = function () {
    var cinemaSel = document.getElementById("cinema");
    var daySel = document.getElementById("day");
    var sessionSel = document.getElementById("session");
    for (var x in subjectObject) {
      cinemaSel.options[cinemaSel.options.length] = new Option(x, x);
    }
    cinemaSel.onchange = function () {
      //empty Chapters- and Topics- dropdowns
      sessionSel.length = 1;
      daySel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        daySel.options[daySel.options.length] = new Option(y, y);
      }
    };
    daySel.onchange = function () {
      //empty Chapters dropdown
      sessionSel.length = 1;
      //display correct values
      var z = subjectObject[cinemaSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        sessionSel.options[sessionSel.options.length] = new Option(z[i], z[i]);
      }
    };
  };
  return (
    <div>
      <form className="form1" name="form1" id="form1" action="/action_page.php">
        <p className="atext">Cinema Name: </p>
        <select className="button" name="cinema" id="cinema">
          <option value="" selected="selected">
            Select cinema name
          </option>
        </select>
        <p className="atext"> Movie Day: </p>
        <select className="button" name="day" id="day">
          <option value="" selected="selected">
            Please select movie day
          </option>
        </select>
        <p className="atext"> Session: </p>
        <select className="button" name="session" id="session">
          <option value="" selected="selected">
            Please select movie session
          </option>
        </select>
      <FaCheckCircle className="tick" size={25} color="#f16775"/>
      </form>
    </div>
  );
};

export default SelectSession;
