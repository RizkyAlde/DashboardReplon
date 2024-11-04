import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const usePump = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/pump/latest`);
            return response.data;
        },
        queryKey: ['pump'],
    })
}