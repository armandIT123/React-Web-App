import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ stats }) => {
  // const { data: stats, isPending: statsPending } = useFetch(
  //   "http://localhost:8000/stats/"
  // );

  const added = parseInt(stats.total);
  const current = parseInt(stats.current);
  const edited = parseInt(stats.edited);
  const deleted = parseInt(stats.deleted);

  const data = [
    {
      name: "Total Clients",
      current_number: added,
    },
    {
      name: "Current # of Clients",
      current_number: current,
    },
    {
      name: "Deleted Clients",
      current_number: deleted,
    },
    {
      name: "Modified Clients",
      current_number: edited,
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="current_number" fill="#34cdeb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
