import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const UseTimeSeriesGH = (gh) => {
    console.log(gh);
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/line/node${gh}`);
            return response.data;
        },
        queryKey: ['series-gh', gh],
    })
}