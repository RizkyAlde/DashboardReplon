import {UseTimeSeriesGH} from "@/query/useTimeSeriesGH";
import dynamic from "next/dynamic";
import {useState} from "react";

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });

const TimeSeries = ({gh}) => {
    const [selectedType, setSelectedType] = useState('temp');

    const {data, isLoading, error} = UseTimeSeriesGH(gh);

    const handleOnChange = (e) => {
        setSelectedType(e.target.value); // Update the selected type
    }

    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

    // Extracting data for the chart
    const timeLabels = data?.data_sensor.map(sensor => sensor.time).reverse() || [];
    const humidityData = data?.data_sensor.map(sensor => sensor.humid).reverse() || [];
    const lumenData = data?.data_sensor.map(sensor => sensor.lumen).reverse() || [];
    const soilData = data?.data_sensor.map(sensor => sensor.soil).reverse() || [];
    const temperatureData = data?.data_sensor.map(sensor => sensor.temp).reverse() || [];

    const options = {
        colors: ['#AED260'],
        chart: {
            id: 'basic-bar',
            type: 'line',
            height: 350,
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            categories: timeLabels,
            title: {
                text: 'Time',
            },
        },
        title: {
            text: 'Greenhouse Data Time Series',
            align: 'center',
        },
        yaxis: {
            title: {
                text: 'Values',
            },
        },
    };

    const series = [
        {
            name: selectedType,
            data: selectedType === 'temp' ? temperatureData : selectedType === 'soil' ? soilData : selectedType === 'humid' ? humidityData : lumenData,
        },
    ];

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih
                    Overview</label>
                <select id="countries" value={selectedType} onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="temp">Suhu</option>
                    <option value="soil">Kelembapan Tanah</option>
                    <option value="humid">Kelembapan Udara</option>
                    <option value="lumen">Intensitas Cahaya</option>
                </select>
            </div>
            <LineChart
                options={options}
                series={series}
                width="100%"
            />
        </div>
)
}

export default TimeSeries;