import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useOverview = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/overview/gh_home`);
            return response.data;
        },
        queryKey: ['overview-all-gh']
    })
}