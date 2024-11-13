import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const usePumpGH = (gh) => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/pump/node${gh}`);
            return response.data;
        },
        queryKey: ['pump-gh', gh],
    })
}