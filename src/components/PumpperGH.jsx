import PumpStatus from "@/components/PumpStatus";
import { usePumpGH } from "@/query/usePumpGH";

const PumpStatusPerGh = () => {
  const greenhouses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Daftar id_gh, sesuaikan sesuai kebutuhan

  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
      {greenhouses.map((gh) => {
        const { data, isLoading, error } = usePumpGH(gh);

        if (isLoading) return <p key={gh} className="flex justify-center items-center">Loading for GH {gh}...</p>;

        if (error) return <p key={gh} className="flex justify-center items-center">Error for GH {gh}: {error.message}</p>;

        return (
          data && (
            <PumpStatus
              key={gh}
              pumpStatus={data.status_pompa ? "ON" : "OFF"}
              title={`Greenhouse ${gh}`}
            />
          )
        );
      })}
    </div>
  );
};

export default PumpStatusPerGh;
