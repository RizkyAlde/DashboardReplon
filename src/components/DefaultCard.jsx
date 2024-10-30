import Image from "next/image";

const DefaultCard = ({ title, subTitle, image, value, backgroud }) => {
    return (
        <div className={`${backgroud ? backgroud : 'bg-yellow'} p-4 rounded-lg shadow-md max-w-xs w-full`}>
            <h4 className="text-xl text-center font-semibold text-gray-800 mb-2">{title}</h4>
            <h5 className="text-center mb-2">{subTitle}</h5>
            <div className="flex justify-between gap-4 items-center">
                <div className="w-16 h-16 flex-shrink-0">
                    <Image src={`/assets/images/${image}.png`} alt="Logo" width={64} height={64} layout="responsive"/>
                </div>
                <h5 className="text-xl font-semibold w-16 h-16 flex items-center justify-center">{value}</h5>
            </div>
        </div>
    )
}

export default DefaultCard;
