import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const usePredictPerDay = (gh) => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/next_prediction/node${gh}`);
            return response.data;
        },
        queryKey: ['predict-per-day-gh', gh],
    })
}