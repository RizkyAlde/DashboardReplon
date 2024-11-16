import { useProductionAllNode } from "@/query/useProductionAllNode";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("@/components/BarChartProduction"), {
  ssr: false,
});

const ProductionAllGh = () => {
  const { data, isLoading, error } = useProductionAllNode();

  // Proses pengurutan data berdasarkan GH
  const sortedData = data
    ? data.gh
        .map((gh, index) => ({
          gh: gh,
          production: data.production[index],
        }))
        .sort((a, b) => a.gh - b.gh)
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
      categories: sortedData.map((item) => ` ${item.gh}`), // Format sumbu x
    },
    plotOptions: {
      bar: {
        horizontal: false, // Menjaga agar bar tetap vertikal
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "50%", // Ukuran font
        fontWeight: 40, // Ketebalan font
        colors: ["#000"], // Warna font
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
    <BarChart height="100%" width="100%" options={options} series={series} />
  );
};

export default ProductionAllGh;
