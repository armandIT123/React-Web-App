import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const GetStats = () => {
  const [stats, setStats] = useState([]);
  fetch("http://localhost:8000/stats/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stats),
  }).then(() => {
    // history.go(-1);
    // history.push("/stats");
  });

  return [stats];
};

export default GetStats;
