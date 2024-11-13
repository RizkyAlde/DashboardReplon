import { useChartPrediction } from "@/query/useChartPrediction";
import dynamic from "next/dynamic";
import { useState } from "react";

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });

const LineChartPrediction = ({ gh }) => {
    const [selectedType, setSelectedType] = useState('temp');

    const { data, isLoading, error } = useChartPrediction(gh);

    // Mendapatkan jam sekarang untuk menentukan kategori (sumbu X)
    const now = new Date();
    const currentHour = now.getHours();
    const categories = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0') + ":00");

    // Filter current data berdasarkan jam saat ini
    const currentTemperature = data?.currentTemperature.slice(0, currentHour + 1) || [];
    const currentLumen = data?.currentLumen.slice(0, currentHour + 1) || [];
    const currentHumidity = data?.currentHumidity.slice(0, currentHour + 1) || [];

    // Data prediksi tetap ditampilkan penuh 24 jam
    const predictedTemperature = data?.predictedTemperature || [];
    const predictedLumen = data?.predictedLumen || [];
    const predictedHumidity = data?.predictedHumidity || [];

    // Mengubah jenis data yang dipilih dari dropdown
    const handleOnChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Series untuk LineChart berdasarkan pilihan jenis data
    const series = [
        {
            name: `Predicted ${selectedType === 'temp' ? 'Temperature' : selectedType === 'lumen' ? 'Lumen' : 'Humidity'}`,
            data: selectedType === 'temp' ? predictedTemperature : selectedType === 'lumen' ? predictedLumen : predictedHumidity,
        },
        {
            name: `Current ${selectedType === 'temp' ? 'Temperature' : selectedType === 'lumen' ? 'Lumen' : 'Humidity'}`,
            data: selectedType === 'temp' ? currentTemperature : selectedType === 'lumen' ? currentLumen : currentHumidity,
        }
    ];

    const options = {
        colors: ['#AED260', '#F39C12'],
        chart: {
            id: 'basic-bar',
            type: 'line',
            height: 250,
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            categories: categories, // Tampilkan semua 24 jam
            title: {
                text: 'Time',
            },
        },
        title: {
            text: 'Greenhouse Data Prediction',
            align: 'center',
        },
        yaxis: {
            title: {
                text: 'Values',
            },
        },
    };

    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;
    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

    return (
        <div >
            <div className="mb-4">
                <label htmlFor="dataType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pilih Overview
                </label>
                <select
                    id="dataType"
                    value={selectedType}
                    onChange={handleOnChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="temp">Suhu</option>
                    <option value="humid">Kelembapan Udara</option>
                    <option value="lumen">Intensitas Cahaya</option>
                </select>
            </div>
            <LineChart options={options} series={series} width="100%"/>
        </div>
    );
}

export default LineChartPrediction;
