import {useProductionAllNode} from "@/query/useProductionAllNode";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import('@/components/BarChart'), {ssr: false});

const ProductionAllGh = () => {

    const {data, isLoading, error} = useProductionAllNode();

    const options = {
        colors: ['#228B22'],
        chart: {
            id: 'basic-bar',
            zoom: {
                enabled: false,
            }
        },
        xaxis: {
            categories: data ? data.gh : [],
        }
    };

    const series = [
        {
            name: "temp-humidity",
            data: data ? data.production : [],
        }
    ];

    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;
    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

  return (
      <BarChart width="100%" options={options} series={series}/>
  );
}

export default ProductionAllGh;