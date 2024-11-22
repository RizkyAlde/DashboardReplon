import CardBasic from "@/components/CardBasic";
import { usePrecentage } from "@/query/usePrecentage";

const PrecentageCard = () => {
  const { data, error } = usePrecentage();

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const formatPercentage = (value) => {
    return value ? `${parseFloat(value).toFixed(1)} %` : "N/A";
  };

  return (
    <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
      <CardBasic
         backgroud={
          data && data.temp_ideal_percentage > 49.9
            ? "bg-green-light"
            : ""
        }
        subTitle="Celsius (°C)"
        title="SUHU"
        value={
          data ? (
            <span className="text-2xl font-semibold">
              {formatPercentage(data.temp_ideal_percentage)}
            </span>
          ) : (
            "N/A"
          )
        }
      />
      <CardBasic
        backgroud={
        data && data.humid_ideal_percentage > 49.9
          ? "bg-green-light"
          : ""
        }
        subTitle="Relative (RH)"
        title="KELEMBABAN UDARA"
        value={
          data ? (
            <span className="text-2xl font-semibold">
              {formatPercentage(data.humid_ideal_percentage)}
            </span>
          ) : (
            "N/A"
          )
        }
      />
      <CardBasic
        backgroud={
        data && data.lumen_ideal_percentage > 49.9
          ? "bg-green-light"
          : ""
        }
        subTitle="LUX (lux)"
        title="INTENSITAS CAHAYA"
        value={
          data ? (
            <span className="text-2xl font-semibold">
              {formatPercentage(data.lumen_ideal_percentage)}
            </span>
          ) : (
            "N/A"
          )
        }
      />
      <CardBasic
      backgroud={
        data && data.soil_ideal_percentage > 49.9
         ? "bg-green-light"
          : ""
        }
        subTitle="Relative (RH)"
        title="KELEMBAPAN TANAH"
        value={
          data ? (
            <span className="text-2xl font-semibold">
              {formatPercentage(data.soil_ideal_percentage)}
            </span>
          ) : (
            "N/A"
          )
        }
      />
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

export default PrecentageCard;
