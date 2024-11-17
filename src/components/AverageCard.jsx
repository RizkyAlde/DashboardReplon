import DefaultCard from "@/components/DefaultCard";
import { useLatestCondition } from "@/query/useLatestCondition";

const AverageCard = () => {
  const { data, error } = useLatestCondition();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
        <DefaultCard
          backgroud={
            data && data.average_temp > 20 && data.average_temp < 38
              ? "bg-green-light"
              : ""
          }
          image="celcius"
          subTitle="Celsius (°C)"
          title="SUHU"
          value={
            data && data.average_temp ? (
              <span className="text-2xl">{`${data.average_temp}°C`}</span> // Menampilkan nilai dengan satuan °C
            ) : (
              "N/A"
            )
          }
        />
        <DefaultCard
          backgroud={
            data && data.average_humid > 20 && data.average_humid < 85
              ? "bg-green-light"
              : ""
          }
          image="kelembapan"
          subTitle="Relative (RH)"
          title="KELEMBABAN UDARA"
          value={
            data && data.average_humid ? (
              <span className="text-2xl">{`${data.average_humid}%`}</span> // Menampilkan nilai dengan satuan %
            ) : (
              "N/A"
            )
          }
        />
        <DefaultCard
          backgroud={
            data && data.average_lumen > 1 && data.average_lumen < 50000
              ? "bg-green-light"
              : ""
          }
          image="cahaya"
          subTitle="LUX (lux)"
          title="INTENSITAS CAHAYA"
          value={
            data && data.average_lumen ? (
              <span className="text-2xl">{`${data.average_lumen} lux`}</span> // Menampilkan nilai dengan satuan lux
            ) : (
              "N/A"
            )
          }
        />
        <DefaultCard
          backgroud={
            data && data.average_soil > 1 && data.average_soil < 85
              ? "bg-green-light"
              : ""
          }
          image="tanah"
          subTitle="Relative (RH)"
          title="KELEMBAPAN TANAH"
          value={
            data && data.average_soil ? (
              <span className="text-2xl">{`${data.average_soil}%`}</span> // Menampilkan nilai dengan satuan %
            ) : (
              "N/A"
            )
          }
        />
      </div>

      <div className="mt-4 text-green-700 font-semibold text-gray-800">
        <p className="text-sm">
          <span className="inline-block w-3.5 h-3.5 bg-green-light mr-2"></span>
          Kondisi ideal
        </p>
        <p className="text-sm">
          <span className="inline-block w-3.5 h-3.5 bg-yellow-light mr-2"></span>
          Kondisi tidak ideal
        </p>
      </div>
    </div>
  );
};

export default AverageCard;
