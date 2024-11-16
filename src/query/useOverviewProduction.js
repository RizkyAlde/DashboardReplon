import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useOverviewProduction = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/overview-production`);
            return response.data;
        },
        queryKey: ['overview-production']
    })
}