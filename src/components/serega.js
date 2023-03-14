import React, { useState, useEffect, useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import "./chart.css";
import { CModal, CModalHeader, CModalTitle, CModalBody } from "@coreui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartJS2() {
  const [startDate, setStartDate] = useState(
    new Date().setDate(new Date().getDate() - 5)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [labelDates, setLabelDates] = useState([]);
  useEffect(() => {
    let Dates = [];
    let startDateMS = Date.parse(startDate);
    let endDateMS = Date.parse(endDate);
    for (let i = startDateMS; i <= endDateMS; i = i + 24 * 60 * 60 * 1000) {
      Dates.push({
        value: 3,
        date: new Date(i),
        dateOUT: new Date(i).toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      });
    }
    setLabelDates(Dates);
  }, [startDate, endDate]);

  const data = {
    labels: labelDates.map((labelDate) => labelDate.dateOUT),
    datasets: [
      {
        label: "Часы",
        data: [3, 4, 3, 3, 6, 3, 7, 8, 4, 9, 1],
        backgroundColor: "#0090d2",
        borderColor: "black",
        borderWidth: 1,
        link: [],
      },
    ],
  };
  const options = {};

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementAtEvent(chartRef.current, event).length > 0) {
      console.log(getElementAtEvent(chartRef.current, event));
      const datasetIndexNum = getElementAtEvent(chartRef.current, event)[0]
        .datasetIndexNum;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      console.log("Dataset: ", { datasetIndexNum }, " and Data: ", {
        dataPoint,
      });
    }
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className="ggg">
      <div className="modal"><CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>Hello friend</CModalBody>
      </CModal>
      </div>
      <div className="inputt">
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        ></input>
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        ></input>
      </div>

      <Bar data={data} options={options} onClick={onClick} ref={chartRef}></Bar>
    </div>
  );
}