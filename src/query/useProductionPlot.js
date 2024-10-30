import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const UseProductionPlot = (gh) => {
    console.log(gh);
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/production/average/node${gh}`);
            return response.data;
        },
        queryKey: ['production-plot-gh', gh],
    })
}