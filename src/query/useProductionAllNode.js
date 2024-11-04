import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useProductionAllNode = () => {
    return useQuery({
        queryFn: async () => {
            const response = await axios.get(`${process.env.BASE_API}/production/all_nodes`);
            const data = response.data;
            const gh = data.map((item) => item.id_gh);
            const production = data.map((item) => item.jumlah_produksi);

            return {
                gh: gh,
                production: production
            };
        },
        queryKey: ['production-all-node'],
    })
}