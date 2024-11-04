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
            <CardBasic subTitle="Celsius (°C)" title="SUHU" value={data ? formatPercentage(data.temp_ideal_percentage) : "N/A"} />
            <CardBasic subTitle="Relative (RH)" title="UDARA" value={data ? formatPercentage(data.humid_ideal_percentage) : "N/A"} />
            <CardBasic subTitle="LUX (lux)" title="CAHAYA" value={data ? formatPercentage(data.lumen_ideal_percentage) : "N/A"} />
            <CardBasic subTitle="Relative (RH)" title="TANAH" value={data ? formatPercentage(data.soil_ideal_percentage) : "N/A"} />
        </div>
    );
};

export default PrecentageCard;
