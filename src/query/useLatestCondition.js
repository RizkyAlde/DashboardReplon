import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const useLatestCondition = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/average/latest`);
            return response.data;
        },
        queryKey: ['latest-condition'],
    })
}