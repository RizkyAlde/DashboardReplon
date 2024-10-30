import {UseTimeSeriesGH} from "@/query/useTimeSeriesGH";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });

const TimeSeries = ({gh}) => {

    const {data, isLoading, error} = UseTimeSeriesGH(gh);

    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

    // Extracting data for the chart
    const timeLabels = data?.data_sensor.map(sensor => sensor.time).reverse() || [];
    const humidityData = data?.data_sensor.map(sensor => sensor.humid).reverse() || [];
    const lumenData = data?.data_sensor.map(sensor => sensor.lumen).reverse() || [];
    const soilData = data?.data_sensor.map(sensor => sensor.soil).reverse() || [];
    const temperatureData = data?.data_sensor.map(sensor => sensor.temp).reverse() || [];

    const options = {
        colors: ['#AED260', '#FF4560', '#008FFB', '#00E396'], // Four colors for four series
        chart: {
            id: 'basic-bar',
            type: 'line', // Assuming a line chart
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
            name: 'Humidity (%)',
            data: humidityData,
        },
        {
            name: 'Light (lumen)',
            data: lumenData,
        },
        {
            name: 'Soil Moisture',
            data: soilData,
        },
        {
            name: 'Temperature (°C)',
            data: temperatureData,
        },
    ];

    return (
        <LineChart
            options={options}
            series={series}
            width="100%"
        />
    )
}

export default TimeSeries;