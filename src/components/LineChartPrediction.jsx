import {useChartPrediction} from "@/query/useChartPrediction";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import('@/components/LineChart'), {ssr: false});

const LineChartPrediction = ({gh}) => {

    const {data, isLoading, error} = useChartPrediction(gh);

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        }
    };

    const series = [
        {
            name: "Temp",
            data: data && data.temperature
        }
    ];

    const series1 = [
        {
            name: "Lumen",
            data: data && data.lumen
        }
    ];

    const series2 = [
        {
            name: "Humid",
            data: data && data.humidity
        }
    ];

    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;
    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="p-6 bg-green-light w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Grafik Temperature</h3>
                <LineChart options={options} series={series} width="100%"/>
            </div>
            <div className="p-6 bg-green-light w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Grafik Lumen</h3>
                <LineChart options={options} series={series1} width="100%"/>
            </div>
            <div className="p-6 bg-green-light w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Grafik Humidity</h3>
                <LineChart options={options} series={series2} width="100%"/>
            </div>
        </div>
    );
}

export default LineChartPrediction;