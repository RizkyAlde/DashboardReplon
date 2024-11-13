import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useChartPrediction = (gh) => {
    return useQuery({
        queryFn: async () => {
            const response = await axios.get(`${process.env.BASE_API}/predictions_line/node${gh}`);
            const data = response.data.hour_predicted;

            // Mengambil predicted data
            const predictedHumidity = data.map((item) => parseFloat(item.Predicted_Humidity));
            const predictedLumen = data.map((item) => parseFloat(item.Predicted_Lumen));
            const predictedTemperature = data.map((item) => parseFloat(item.Predicted_Temperature));

            // Mengambil current data (semua 24 jam)
            const currentHumidity = data.map((item) => item.Current_Humidity);
            const currentLumen = data.map((item) => item.Current_Lumen);
            const currentTemperature = data.map((item) => item.Current_Temperature);

            return {
                predictedHumidity,
                predictedLumen,
                predictedTemperature,
                currentHumidity,
                currentLumen,
                currentTemperature
            };
        },
        queryKey: ['prediction', gh],
    });
};
