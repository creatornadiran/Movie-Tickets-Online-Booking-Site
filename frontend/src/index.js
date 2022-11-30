import * as ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainpage from './Mainpage';

function Appp() {
  return (
      <div>
          <Mainpage />
       
      </div>

  )
}
ReactDOM.render(<Appp />, document.getElementById("root"));
