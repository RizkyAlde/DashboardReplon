import dynamic from "next/dynamic";
import { useState } from "react";
import { useProductionSeries } from "@/query/useProductionSeries";

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });

const LineChartProduction = () => {
    const [selectedType, setSelectedType] = useState(2);
    const { data, isLoading, error } = useProductionSeries();

    const handleOnChange = (e) => {
        setSelectedType(parseInt(e.target.value));
    };

    // Prepare the chart options and series based on the selected greenhouse type
    const selectedData = data ? data.find(item => item.gh === selectedType) : null;

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: selectedData ? selectedData.time : [],
        }
    };

    const series = [
        {
            name: "Produksi",
            data: selectedData ? selectedData.data : [],
        }
    ];

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Overview</label>
            <select
                id="countries"
                value={selectedType}
                onChange={handleOnChange}
                className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    data && data.map((item) => (
                        <option key={item.gh} value={item.gh}>Greenhouse {item.gh}</option>
                    ))
                }
            </select>
            <LineChart width="100%" options={options} series={series} />
        </div>
    );
};

export default LineChartProduction;
