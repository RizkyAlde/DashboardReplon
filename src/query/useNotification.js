import {useQuery} from "@tanstack/react-query";

export const UseNotification = () => {
    return useQuery({
        queryFn : async () => {
            const response = await axios.get(`${process.env.BASE_API}/detect_outliers/node1`);
            return response.data;
        },
        queryKey: ['notification'],
    })
}