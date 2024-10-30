import { useState, useEffect } from "react";
import { UseConditionGH } from "@/query/UseConditionGH"; // Adjust the import based on your file structure
import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import TimeSeries from "@/components/TimeSeries";
import CardBasic from "@/components/CardBasic";
import PumpStatus from "@/components/PumpStatus";
import dynamic from "next/dynamic";

const ScatterChart = dynamic(() => import('@/components/ScatterChart'), { ssr: false });

const Monitoring = () => {
    const [selectedType, setSelectedType] = useState('1');

    // Fetch data based on the selected greenhouse type
    const { data, isLoading, error } = UseConditionGH(selectedType);

    const handleOnChange = (e) => {
        setSelectedType(e.target.value); // Update the selected type
    };

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom : {
                enabled: false,
            }
        },
        xaxis: {
            categories: ['32', '34', '36', '38', '40', '42']
        }
    };

    const series = [
        {
            name: "temp-humidity", // Update series name based on selected type
            data: [30, 32, 34, 36, 38, 40]
        }
    ];


    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;

    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

    return (
        <div className="grid w-full grid-cols-1 justify-center">
            <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                <select
                    value={selectedType}
                    onChange={handleOnChange}
                    className="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="1">Greenhouse 1</option>
                    <option value="2">Greenhouse 2</option>
                    <option value="3">Greenhouse 3</option>
                    <option value="4">Greenhouse 4</option>
                    <option value="5">Greenhouse 5</option>
                    <option value="6">Greenhouse 6</option>
                    <option value="7">Greenhouse 7</option>
                    <option value="8">Greenhouse 8</option>
                    <option value="9">Greenhouse 9</option>
                    <option value="10">Greenhouse 10</option>
                    <option value="11">Greenhouse 11</option>
                    <option value="12">Greenhouse 12</option>
                </select>
                <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
                    <DefaultCard backgroud={data && data.temp > 20 && data.temp < 38 ? 'bg-green-light' : ''} image="celcius" subTitle="Celsius (°C)" title="SUHU"
                                 value={`${data?.temp || 'N/A'} °C`}/>
                    <DefaultCard backgroud={data && data.humid > 20 && data.humid < 85 ? 'bg-green-light' : ''} image="kelembapan" subTitle="Relative (RH)" title="UDARA"
                                 value={`${data?.humid || 'N/A'}%`}/>
                    <DefaultCard backgroud={data && data.lumen > 1 && data.lumen < 50000 ? 'bg-green-light' : ''} image="cahaya" subTitle="LUX (lux)" title="CAHAYA"
                                 value={`${data?.lumen || 'N/A'} lux`}/>
                    <DefaultCard backgroud={data && data.soil > 1 && data.soil < 85 ? 'bg-green-light' : ''} image="tanah" subTitle="Relative (RH)" title="TANAH"
                                 value={`${data?.soil || 'N/A'}%`}/>
                </div>
            </div>
            <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                <TimeSeries gh={selectedType}/>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
                <div className=" p-6 lg:w-1/3 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                    <PumpStatus pumpStatus={data?.pump || 'N/A'} title="Status Pompa"/>
                </div>
                <div className=" p-2 lg:w-3/4 w-full flex flex-col lg:flex-row gap-2 bg-white border border-gray-200 rounded-lg shadow mb-4">
                    <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                        <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature with Humidity</h4>
                        <ScatterChart options={options} series={series} width="100%"/>
                    </div>
                    <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                        <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature vs Light Intensity</h4>
                        <ScatterChart options={options} series={series} width="100%"/>
                    </div>
                    <div className="p-1 lg:w-1/3 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4">
                        <h4 className="text-center text-xs font-semibold text-gray-800">Scatter Plot of Temperature vs Light Intensity</h4>
                        <ScatterChart options={options} series={series} width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withLayout(Monitoring, 'admin');
