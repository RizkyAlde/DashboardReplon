import PumpStatus from "@/components/PumpStatus";
import {usePump} from "@/query/usePump";

const PumpAllGh = () => {

    const {data, isLoading, error} = usePump();

    if (isLoading) return <p className="flex justify-center items-center">Loading...</p>;

    if (error) return <p className="flex justify-center items-center">Error: {error.message}</p>;

  return (
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
          {
              data && data.map((item, index) => (
                    <PumpStatus key={index} pumpStatus={item.status_pompa ? "ON" : "OFF"} title={`Greenhouse ${item.id_gh}`}/>
                ))
          }
      </div>
  );
}

export default PumpAllGh;