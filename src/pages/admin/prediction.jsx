import withLayout from "@/layouts/withLayout";
import DefaultCard from "@/components/DefaultCard";
import { useState } from "react";
import dynamic from "next/dynamic";
import { usePredictPerDay } from "@/query/usePredictPerDay";
import LineChartPrediction from "@/components/LineChartPrediction";

const LineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});

const Prediction = () => {
  const [selectedType, setSelectedType] = useState("1");
  const { data, isLoading, error } = usePredictPerDay(selectedType);

  const handleOnChange = (e) => {
    setSelectedType(e.target.value); // Update the selected type
  };

  if (isLoading)
    return <p className="flex justify-center items-center">Loading...</p>;

  return (
    <div className="grid w-full grid-cols-1 justify-center">
      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Prediksi{" "}
        </h3>
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
          <DefaultCard
            backgroud={
              data?.Next_Hour_Prediction.Predicted_Temperature > 20 &&
              data?.Next_Hour_Prediction.Predicted_Temperature < 38
                ? "bg-green-light"
                : ""
            }
            image="celcius"
            subTitle="Celsius (°C)"
            title="SUHU"
            value={
              <span className="text-2xl font-bold">
                {data?.Next_Hour_Prediction.Predicted_Temperature
                  ? `${data.Next_Hour_Prediction.Predicted_Temperature}°C`
                  : "N/A"}
              </span>
            }
          />

          <DefaultCard
            backgroud={
              data?.Next_Hour_Prediction.Predicted_Humidity > 20 &&
              data?.Next_Hour_Prediction.Predicted_Humidity < 85
                ? "bg-green-light"
                : ""
            }
            image="kelembapan"
            subTitle="Relative (RH)"
            title="UDARA"
            value={
              <span className="text-2xl font-bold">
                {data?.Next_Hour_Prediction.Predicted_Humidity
                  ? `${data.Next_Hour_Prediction.Predicted_Humidity}%`
                  : "N/A"}
              </span>
            }
          />

          <DefaultCard
            backgroud={
              data?.Next_Hour_Prediction.Predicted_Lumen > 1 &&
              data?.Next_Hour_Prediction.Predicted_Lumen < 50000
                ? "bg-green-light"
                : ""
            }
            image="cahaya"
            subTitle="LUX (lux)"
            title="CAHAYA"
            value={
              <span className="text-2xl font-bold">
                {data?.Next_Hour_Prediction.Predicted_Lumen
                  ? `${data.Next_Hour_Prediction.Predicted_Lumen} lux`
                  : "N/A"}
              </span>
            }
          />

          <DefaultCard
            backgroud={
              data?.Next_Hour_Prediction.Predicted_Soil > 1 &&
              data?.Next_Hour_Prediction.Predicted_Soil < 85
                ? "bg-green-light"
                : ""
            }
            image="tanah"
            subTitle="Relative (RH)"
            title="TANAH"
            value={
              <span className="text-2xl font-bold">
                {data?.Next_Hour_Prediction.Predicted_Soil
                  ? `${data.Next_Hour_Prediction.Predicted_Soil}%`
                  : "N/A"}
              </span>
            }
          />
        </div>
        <div className="mt-4 text-green-700 font-semibold text-gray-800">
          <p className="text-sm">
            <span className="inline-block w-3.5 h-3.5 bg-green-light mr-2"></span>
            Kondisi ideal
          </p>
          <p className="text-sm">
            <span className="inline-block w-3.5 h-3.5 bg-yellow-light mr-2"></span>
            Kondisi tidak ideal
          </p>
        </div>
      </div>

      <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow mb-4">
        <h3 className="text-2xl text-green-700 font-semibold text-gray-800 mb-4">
          Grafik Prediksi
        </h3>
        <LineChartPrediction gh={selectedType} />
      </div>
    </div>
  );
};

export default withLayout(Prediction, "admin");
