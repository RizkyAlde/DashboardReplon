import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useTimeSeriesPump = (gh) => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/pump/node${gh}`);
            const data = response.data;
            const dataPump = data.map((item) => {
                if (item.status_pompa === true) {
                    return 1;
                }
                return 0;
            });
            const time = data.map((item) => {
                return item.time;
            });
            return {
                dataPump: dataPump,
                time: time
            }
        },
        queryKey: ['time-series-pump', gh],
    })
}