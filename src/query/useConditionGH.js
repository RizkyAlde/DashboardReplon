import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const UseConditionGH = (gh) => {
    console.log(gh);
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/monitoring/node${gh}`);
            return response.data;
        },
        queryKey: ['condition-gh', gh],
    })
}