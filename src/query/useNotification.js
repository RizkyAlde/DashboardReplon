import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useNotification = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/outliers_hour`);
            return response.data;
        },
        queryKey: ['notification'],
    })
}