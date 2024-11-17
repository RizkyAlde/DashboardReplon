import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import withLayout from "@/layouts/withLayout";
import AverageCard from "@/components/AverageCard";
import PrecentageCard from "@/components/PrecentageCard";
import { useOverview } from "@/query/useOverview";

const BarChart = dynamic(() => import("@/components/BarChart"), { ssr: false });

const AdminPage = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const { data, isLoading, error } = useOverview();
  const [selectedType, setSelectedType] = useState("temp"); // Default selected type
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const updateWidth = () => {
      setChartWidth((window.innerWidth * 70) / 100); // Adjust the value as needed
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (data) {
      const selectedData = data.find((item) => item.type === selectedType);
      if (selectedData) {
        setSeriesData(selectedData.series);
      }
    }
  }, [data, selectedType]);

  const handleOnChange = (e) => {
    setSelectedType(e.target.value);
  };

  const options = {
    colors: ["#AED260"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "GH1",
        "GH2",
        "GH3",
        "GH4",
        "GH5",
        "GH6",
        "GH7",
        "GH8",
        "GH9",
        "GH10",
        "GH11",
        "GH12",
      ],
    },
  };

  const series = [
    {
      name: selectedType,
      data: seriesData,
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
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Average
        </h3>
        <AverageCard />
      </div>
      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Percentage of Ideal
        </h3>
        <PrecentageCard />
      </div>
      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Perbandingan Kondisi Greenhouse
        </h3>
        <div>
          <label
            htmlFor="overview"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pilih Overview
          </label>
          <select
            id="overview"
            value={selectedType}
            onChange={handleOnChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="temp">Suhu</option>
            <option value="soil">Kelembapan Tanah</option>
            <option value="humid">Kelembaban Udara</option>
            <option value="lumen">Intensitas Cahaya</option>
          </select>
        </div>
        <div>
          <BarChart options={options} series={series} width={chartWidth} />
        </div>
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

export default withLayout(AdminPage, "admin");
