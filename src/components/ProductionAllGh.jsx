import { useProductionAllNode } from "@/query/useProductionAllNode";
import dynamic from "next/dynamic";
import { useState } from "react";

const BarChart = dynamic(() => import("@/components/BarChartProduction"), {
  ssr: false,
});

const ProductionAllGh = () => {
  const { data, isLoading, error } = useProductionAllNode();
  
  const [sortOrder, setSortOrder] = useState("none"); // Default: none (tidak ada filter)
  const [chartWidth, setChartWidth] = useState("100%"); // Lebar chart default

  // Proses pengurutan data berdasarkan GH dan opsi sorting
  const sortedData = data
    ? data.gh
        .map((gh, index) => ({
          gh: gh,
          production: data.production[index],
        }))
        .sort((a, b) => {
          if (sortOrder === "asc") return a.production - b.production; // Ascending
          if (sortOrder === "desc") return b.production - a.production; // Descending
          return 0; // None (tidak diurutkan)
        })
    : [];

  const options = {
    colors: ["#228B22"],
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: sortedData.map((item) => `GH ${item.gh}`), // Format sumbu x
    },
    plotOptions: {
      bar: {
        horizontal: false, // Menjaga agar bar tetap vertikal
        columnWidth: "70%", // Ukuran bar tetap sesuai
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px", // Ukuran font label
        fontWeight: "bold", // Ketebalan font
        colors: ["#ffffff"], // Warna font (putih untuk kontras)
      },
    },
  };

  const series = [
    {
      name: "Production",
      data: sortedData.map((item) => item.production), // Data sesuai urutan GH
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
        <label
          htmlFor="sortOrder"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pilih Sorting
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="none">None</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
        {/* Chart */}
        <div>
          <BarChart options={options} series={series} width={chartWidth} />
        </div>
      </div>
    </div>
  );
};

export default ProductionAllGh;
