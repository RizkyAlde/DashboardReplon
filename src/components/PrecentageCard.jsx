import CardBasic from "@/components/CardBasic";
import {usePrecentage} from "@/query/usePrecentage";

const PrecentageCard = () => {

    const {data, error} = usePrecentage();

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
            <CardBasic subTitle="Celsius (°C)" title="SUHU" value={data && data.temp_ideal_percentage ? `${data.temp_ideal_percentage} %` : "N/A"}/>
            <CardBasic subTitle="Relative (RH)" title="UDARA" value={data && data.humid_ideal_percentage ? `${data.humid_ideal_percentage} %` : "N/A"}/>
            <CardBasic subTitle="LUX (lux)" title="CAHAYA" value={data && data.lumen_ideal_percentage ? `${data.lumen_ideal_percentage} %` : "N/A"}/>
            <CardBasic subTitle="Relative (RH)" title="TANAH" value={data && data.soil_ideal_percentage ? `${data.soil_ideal_percentage} %` : "N/A"}/>
        </div>
    )
}

export default PrecentageCard;