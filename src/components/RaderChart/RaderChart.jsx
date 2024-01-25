// eslint-disable-next-line no-unused-vars
import React from "react";
import { Legend, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const RaderChart = () => {
  const marksArray = [
    {
      id: 1,
      name: "Student 1",
      physics: 75,
      chemistry: 85,
      math: 90,
    },
    {
      id: 2,
      name: "Student 2",
      physics: 80,
      chemistry: 70,
      math: 95,
    },
    {
      id: 3,
      name: "Student 3",
      physics: 90,
      chemistry: 80,
      math: 75,
    },
    {
      id: 4,
      name: "Student 4",
      physics: 65,
      chemistry: 75,
      math: 85,
    },
    {
      id: 5,
      name: "Student 5",
      physics: 70,
      chemistry: 90,
      math: 80,
    },
    {
      id: 6,
      name: "Student 6",
      physics: 85,
      chemistry: 65,
      math: 70,
    },
    {
      id: 7,
      name: "Student 7",
      physics: 80,
      chemistry: 90,
      math: 85,
    },
    {
      id: 8,
      name: "Student 8",
      physics: 75,
      chemistry: 85,
      math: 90,
    },
    {
      id: 9,
      name: "Student 9",
      physics: 90,
      chemistry: 70,
      math: 80,
    },
    {
      id: 10,
      name: "Student 10",
      physics: 70,
      chemistry: 75,
      math: 95,
    },
    {
      id: 11,
      name: "Student 11",
      physics: 80,
      chemistry: 85,
      math: 65,
    },
    {
      id: 12,
      name: "Student 12",
      physics: 75,
      chemistry: 90,
      math: 70,
    },
  ];

  return (
    <div>
      <RaderChart outerRadius={90} width={730} height={250} data={marksArray}>
        <PolarAngleAxis dataKey="physics"></PolarAngleAxis>
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="name"
          dataKey="physics"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="name"
          dataKey="chemistry"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RaderChart>
    </div>
  );
};

export default RaderChart;
