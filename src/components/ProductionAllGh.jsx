import { useProductionAllNode } from "@/query/useProductionAllNode";
import dynamic from "next/dynamic";
import { useState } from "react";

const BarChart = dynamic(() => import("@/components/BarChartProduction"), {
  ssr: false,
});

const ProductionAllGh = () => {
  const { data, isLoading, error } = useProductionAllNode();

  const [sortOrder, setSortOrder] = useState("none"); // Default: none (tidak ada filter)

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
          return a.gh - b.gh; // None: default urut GH (dari GH1 ke GH12)
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
      categories: sortedData.map((item) => `${item.gh}`), // Hanya angka 1 hingga 12
    },
    yaxis: {
      min: 0,
      max: 3000, // Membatasi sumbu Y
    },
    plotOptions: {
      bar: {
        horizontal: false, // Menjaga agar bar tetap vertikal
        dataLabels: {
          position: "center", // Menempatkan nilai di tengah bar
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "50%", // Ukuran font
        fontWeight: 40, // Ketebalan font
        colors: ["#fff"], // Warna font (hitam)
      },
      offsetY: 0, // Menyesuaikan posisi vertikal
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
    <div>
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
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="none">None</option>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>
      {/* Chart */}
      <BarChart height="100%" width="100%" options={options} series={series} />
    </div>
  );
};

export default ProductionAllGh;
