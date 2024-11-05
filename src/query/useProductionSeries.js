import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useProductionSeries = () => {
    return useQuery({
        queryFn: async () => {
            const res = await axios.get(`${process.env.BASE_API}/predict-product`);
            const data = res.data;
            const transformedData = Object.entries(data).map(([key, values]) => ({
                gh: parseInt(key),
                time: values.map(item => item.waktu_panen),
                data: values.map(item => item.jumlah_produksi ?? item.jumlah_produksi_prediksi)
            }));

            return transformedData;

        },
        queryKey: ['production'],
    });
}