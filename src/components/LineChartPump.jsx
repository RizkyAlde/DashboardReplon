import React from "react";
import Chart from "react-apexcharts";

const generateTimeArray = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    const time = `${hour.toString().padStart(2, "0")}:00`;
    times.push(time);
  }
  return times;
};

const LineChartPump = ({ series, width }) => {
  const fullTimeRange = generateTimeArray(); // Array dari 00:00 hingga 23:00

  const options = {
    chart: {
      id: "realtime-line-chart",
    },
    xaxis: {
      categories: fullTimeRange,
      min: 0, // Index untuk 00:00
      max: 25, // Index untuk 23:00
      title: {
        text: "Time",
      },
    },
    yaxis: {
      title: {
        text: "Data Value",
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0, // Menghilangkan dot
    },
    colors: ["#AED260"], // Warna green light dari Tailwind
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        formatter: (value, { dataPointIndex }) => fullTimeRange[dataPointIndex],
      },
    },
  };

  return (
    <div className="app bg-white rounded-lg">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width={width} />
        </div>
      </div>
    </div>
  );
};

export default LineChartPump;
