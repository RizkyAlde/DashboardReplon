import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import {useState} from "react";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import('@/components/LineChart'), { ssr: false });

const Prediction = () => {

    const [selectedType, setSelectedType] = useState('1');

    const handleOnChange = (e) => {
        setSelectedType(e.target.value); // Update the selected type
    };

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
            data: [[30, 40], [32, 38], [34, 36], [36, 34], [38, 32], [40, 30]] // Ensure it's formatted as [x, y] pairs
        }
    ];

  return (
      <div className="grid w-full grid-cols-1 justify-center">
          <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
              <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Prediksi </h3>
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
                  <DefaultCard image="celcius" subTitle="Celsius (°C)" title="SUHU" value="100%"/>
                  <DefaultCard image="kelembapan" subTitle="Relative (RH)" title="UDARA" value="46.7%"/>
                  <DefaultCard image="cahaya" subTitle="LUX (lux)" title="CAHAYA" value="2488lux"/>
                  <DefaultCard image="tanah" subTitle="Relative (RH)" title="TANAH" value="66.7%"/>
              </div>
          </div>

          <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
              <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">Grafik Prediksi</h3>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="p-6 bg-green-light w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                      <LineChart options={options} series={series} width="100%"/>
                  </div>
                  <div className="p-6 bg-green-light w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
                      <LineChart options={options} series={series} width="100%"/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default withLayout(Prediction, 'admin');