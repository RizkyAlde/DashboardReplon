import { useScatterMonitoring } from "@/query/useScatterMonitoring";
import dynamic from "next/dynamic";

const ScatterChart = dynamic(() => import('@/components/ScatterChart'), { ssr: false });

const ScatterPlotMonitoring = ({ gh }) => {
    const { data, error, isLoading } = useScatterMonitoring(gh);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;


    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: data && data.tempHumid.temp,
        }
    };

    const options1 = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: data && data.tempLumen.temp,
        }
    };

    const series = [
        {
            name: "temp-humidity",
            data: data && data.tempHumid.humid,
        }
    ];

    const series1 = [
        {
            name: "temp-humidity",
            data: data && data.tempLumen.lumen,
        }
    ];

    return (
        <div className="p-2 lg:w-3/4 w-full flex flex-col lg:flex-row gap-2 bg-white border border-gray-200 rounded-lg shadow mb-4">
            <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature with Humidity</h4>
                <ScatterChart options={options} series={series} width="100%" />
            </div>
            <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature vs Light Intensity</h4>
                <ScatterChart options={options1} series={series1} width="100%" />
            </div>
            <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature vs Light Intensity</h4>
                <ScatterChart options={options1} series={series1} width="100%" />
            </div>
        </div>
    );
};

export default ScatterPlotMonitoring;
