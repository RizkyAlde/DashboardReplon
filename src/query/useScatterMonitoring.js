import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useScatterMonitoring = (gh) => {
    return useQuery({
        queryFn: async () => {
            try {
                const response = await axios.get(`${process.env.BASE_API}/scatter/node${gh}`);
                console.log("API Response:", response.data);

                const tempHumid = response.data.temp_humid_combinations;
                const tempHumid_temp = tempHumid.map((item) => item.temp);
                const tempHumid_humid = tempHumid.map((item) => item.humid);

                const tempLumen = response.data.lumen_temp_combinations;
                const tempLumen_temp = tempLumen.map((item) => item.temp);
                const tempLumen_lumen = tempLumen.map((item) => item.lumen);

                return {
                    tempHumid: {
                        temp: tempHumid_temp,
                        humid: tempHumid_humid,
                    },
                    tempLumen: {
                        temp: tempLumen_temp,
                        lumen: tempLumen_lumen,
                    },
                };
            } catch (error) {
                console.error("Error in queryFn:", error);
                throw error;  // Ensure the error is thrown to be caught by useQuery
            }
        },
        queryKey: ['scatter_monitoring', gh],
    });
};
