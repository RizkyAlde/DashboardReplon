import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const usePrecentage = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/ideal-percentage`);
            return response.data;
        },
        queryKey: ['precentage'],
    })
}