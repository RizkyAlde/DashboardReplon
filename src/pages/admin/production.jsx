import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import {UseProductionPlot} from "@/query/useProductionPlot";
import dynamic from "next/dynamic";
import ProductionAllGh from "@/components/ProductionAllGh";

const ScatterChart = dynamic(() => import('@/components/ScatterChart'), { ssr: false });
const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });
const BarChart = dynamic(() => import('@/components/BarChart'), { ssr: false });

const Production = () => {

    const { data, isLoading, error } = UseProductionPlot("1");

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            title: {
                text: 'Temperature (°C)',
            },
            labels: {
                formatter: (val) => `${val} °C`,
            },
        },
        yaxis: {
            title: {
                text: 'Humidity (%)',
            },
            labels: {
                formatter: (val) => `${val} %`,
            },
        },
    };

    const series = [
        {
            name: "Temp-Humidity",
            data: data?.data?.map(point => [point.x, point.y]) || [] // Ensure it's formatted as [x, y] pairs
        }
    ];

    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;
    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

  return (
      <div className="grid w-full grid-cols-1 justify-center">
          <div
              className="p-3 w-full flex gap-2 flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow mb-4">
              <div className="p-6 w-full bg-green-light border border-gray-200 rounded-lg shadow mb-4">
                  <div className="flex justify-between items-center p-2">
                      <h3 className="text-2xl  font-semibold text-gray-800 mb-4">Rata rata Suhu</h3>
                      <h4 className="text-lg p-4 bg-[#336600] rounded-lg font-semibold text-gray-800 mb-4">34 C</h4>
                  </div>
                  <ScatterChart width="100%" options={options} series={series}/>
              </div>
              <div className="p-6 w-full bg-green-light border border-gray-200 rounded-lg shadow mb-4">
                  <div className="flex justify-between gap-2 items-center p-2">
                      <h3 className="text-2xl  font-semibold text-gray-800 mb-4">Intensitas Cahaya</h3>
                      <h4 className="text-lg p-4 bg-[#336600] rounded-lg font-semibold text-gray-800 mb-4">117 lux</h4>
                  </div>
                  <ScatterChart width="100%" options={options} series={series}/>
              </div>
          </div>
          <div
              className="p-3 w-full flex gap-2 flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow mb-4">
              <div className="p-6 w-full bg-green-light border border-gray-200 rounded-lg shadow mb-4">
                  <h3 className="text-2xl  font-semibold text-gray-800 mb-4">Prediksi Jumlah Produksi</h3>
                  <LineChart width="100%" options={options} series={series}/>
              </div>
              <div className="p-6 w-full bg-green-light border border-gray-200 rounded-lg shadow mb-4">
                  <h3 className="text-2xl  font-semibold text-gray-800 mb-4">Produksi Tiap GH</h3>
                  <ProductionAllGh />
              </div>
          </div>
      </div>
  );
}

export default withLayout(Production, 'admin');