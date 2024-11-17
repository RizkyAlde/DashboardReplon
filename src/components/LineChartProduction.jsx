import dynamic from "next/dynamic";
import { useState } from "react";
import { useProductionSeries } from "@/query/useProductionSeries";

const LineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});

const LineChartProduction = () => {
  const [selectedType, setSelectedType] = useState(2);
  const { data, isLoading, error } = useProductionSeries();

  const handleOnChange = (e) => {
    setSelectedType(parseInt(e.target.value));
  };

  const selectedData = data
    ? data.find((item) => item.gh === selectedType)
    : null;

  // Pisahkan data aktual (1-7) dan prediksi (7-8)
  const allData = selectedData ? selectedData.data : [];
  const actualData = allData.slice(0, allData.length - 1); // Data 1-7
  const predictionData = allData.slice(-2); // Data 7-8

  const allCategories = selectedData ? selectedData.time : [];
  const actualCategories = allCategories.slice(0, actualData.length); // Kategori waktu untuk 1-7
  const predictionCategories = allCategories.slice(-2); // Kategori waktu untuk 7-8

  // Konfigurasi chart dengan dua garis terpisah
  const options = {
    chart: {
      id: "line-chart-production",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: allCategories, // Semua kategori waktu
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    tooltip: {
      shared: true,
    },
  };

  const series = [
    {
      name: "Data Aktual",
      data: [...actualData, null], // Garis data aktual (1–7), null untuk memutus garis
      color: "#228B22", // Hijau
    },
    {
      name: "Prediksi",
      data: [null, null, null,, null, null, ...predictionData], // Garis prediksi (7–8), null untuk memutus garis
      color: "#FFA500", // Oranye
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Pilih Overview
      </label>
      <select
        id="countries"
        value={selectedType}
        onChange={handleOnChange}
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {data &&
          data.map((item) => (
            <option key={item.gh} value={item.gh}>
              Greenhouse {item.gh}
            </option>
          ))}
      </select>
      <LineChart width="100%" options={options} series={series} />
    </div>
  );
};

export default LineChartProduction;
