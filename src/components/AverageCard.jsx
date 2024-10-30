import DefaultCard from "@/components/DefaultCard";
import {useLatestCondition} from "@/query/useLatestCondition";

const AverageCard = () => {

    const { data, error } = useLatestCondition();

    if (error) {
        return <div>Error: {error.message}</div>
    }

    console.log(data);

    return (
        <div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
            <DefaultCard backgroud={data && data.average_temp > 20 && data.average_temp < 38 ? 'bg-green-light' : ''} image="celcius" subTitle="Celsius (°C)" title="SUHU" value={data && data.average_temp ? data.average_temp : "N/A"}/>
            <DefaultCard backgroud={data && data.average_humid > 20 && data.average_humid < 85 ? 'bg-green-light' : ''} image="kelembapan" subTitle="Relative (RH)" title="UDARA" value={data && data.average_humid ? data.average_humid : "N/A"}/>
            <DefaultCard backgroud={data && data.average_lumen > 1 && data.average_lumen < 50000 ? 'bg-green-light' : ''} image="cahaya" subTitle="LUX (lux)" title="CAHAYA" value={data && data.average_lumen ? data.average_lumen : "N/A"}/>
            <DefaultCard backgroud={data && data.average_soil > 1 && data.average_soil < 85 ? 'bg-green-light' : ''} image="tanah" subTitle="Relative (RH)" title="TANAH" value={data && data.average_soil ? data.average_soil : "N/A"}/>
        </div>
    )
}

export default AverageCard;