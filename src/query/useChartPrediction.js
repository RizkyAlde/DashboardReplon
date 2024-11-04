import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useChartPrediction = (gh) => {
    return useQuery({
        queryFn: async () => {
            const response = await axios.get(`${process.env.BASE_API}/prediction/node${gh}`);
            const data = response.data;

            // Cek jika objek kosong dan kembalikan array kosong jika iya
            const humidity = data.Humidity_Predictions && Object.keys(data.Humidity_Predictions).length
                ? Object.values(data.Humidity_Predictions).map(parseFloat)
                : [];

            const lumen = data.Lumen_Predictions && Object.keys(data.Lumen_Predictions).length
                ? Object.values(data.Lumen_Predictions).map(parseFloat)
                : [];

            const temperature = data.Temperature_Predictions && Object.keys(data.Temperature_Predictions).length
                ? Object.values(data.Temperature_Predictions).map(parseFloat)
                : [];

            return {
                humidity: humidity,
                lumen: lumen,
                temperature: temperature
            };
        },
        queryKey: ['prediction', gh],
    });
};
