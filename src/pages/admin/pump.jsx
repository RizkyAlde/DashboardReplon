import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import PumpStatus from "@/components/PumpStatus";
import dynamic from "next/dynamic";
import { useTimeSeriesPump } from "@/query/useTimeSeriesPump";
import { useState } from "react";
import PumpAllGh from "@/components/PumpAllGh";
// import LineChartPump from "@/components/LineChartPump";

const LineChartPump = dynamic(() => import("@/components/LineChartPump"), {
  ssr: false,
});

const Pump = () => {
  const [selectedType, setSelectedType] = useState("1");
  const handleOnChange = (e) => {
    setSelectedType(e.target.value); // Update the selected type
  };

  const { data, isLoading, error } = useTimeSeriesPump(selectedType);
  console.log(data);
  const options = {
    colors: ["#228B22"],
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: data ? data.time : [],
      reverse: false,
    },
    yaxis: {
      min: 0, // Nilai minimum untuk OFF
      max: 1, // Nilai maksimum untuk ON
      tickAmount: 1, // Tentukan hanya 2 ticks (0 dan 1)
      labels: {
        formatter: function (value) {
          return value === 1 ? "ON" : "OFF"; // Ganti label dengan ON dan OFF
        },
      },
    },
  };

  const series = [
    {
      name: "pump-status",
      data: data ? data.dataPump : [],
    },
  ];

  if (isLoading)
    return <p className="flex justify-center items-center">Loading...</p>;
  if (error)
    return (
      <p className="flex justify-center items-center">Error: {error.message}</p>
    );

  return (
    <div className="grid w-full grid-cols-1 justify-center">
      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 text-center font-semibold text-gray-800 mb-4">
          Status Pompa 12 Greenhouse
        </h3>
        <PumpAllGh />
      </div>

      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Grafik Status Pompa
        </h3>
        <select
          value={selectedType}
          onChange={handleOnChange}
          className="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="1">Greenhouse 1</option>
          <option value="2">Greenhouse 2</option>
          <option value="3">Greenhouse 3</option>
          <option value="4">Greenhouse 4</option>
          <option value="5">Greenhouse 5</option>
          <option value="6">Greenhouse 6</option>
          <option value="7">Greenhouse 7</option>
          <option value="8">Greenhouse 8</option>
          <option value="9">Greenhouse 9</option>
          <option value="10">Greenhouse 10</option>
          <option value="11">Greenhouse 11</option>
          <option value="12">Greenhouse 12</option>
        </select>
        <LineChartPump
          options={options}
          series={series}
          height={"90%"}
          width={"90%"}
        />
      </div>
      {/* Footer */}
      <footer className="w-full text-center py-1 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          © 2024 Politeknik Elektronika Negeri Surabaya
        </p>
      </footer>
    </div>
  );
};
export default withLayout(Pump, "admin");
