import React, { useState, useEffect } from "react";
import axios from "axios";

const LogPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get("Logs/")
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Logs:</h1>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.message} ({log.timestamp})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogPage;
