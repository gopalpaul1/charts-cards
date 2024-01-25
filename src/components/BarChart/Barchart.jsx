// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Barchart = () => {
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
      <BarChart width={800} height={400} data={marksArray}>
        <XAxis dataKey="name" stroke="#8884d8"></XAxis>
        <YAxis></YAxis>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}></Tooltip>
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        ></Legend>
        <Bar dataKey="math" fill="#8884d8" barSize={30}></Bar>
        <Bar dataKey="physics" fill="#8884d8" barSize={30}></Bar>
        <Bar dataKey="chemistry" fill="#8884d8" barSize={30}></Bar>
      </BarChart>
      <h1 className='text-2xl mt-0 text-purple-800 text-center'>BarChart</h1>
    </div>
  );
};

export default Barchart;
