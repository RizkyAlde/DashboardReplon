import Image from "next/image";

const CardBasic = ({ title, subTitle, value }) => {
    return (
        <div className="bg-green-light p-4 rounded-lg shadow-md max-w-xs w-full">
            <h4 className="text-xl text-center font-semibold text-gray-800 mb-2">{title}</h4>
            <h5 className="text-center mb-2">{subTitle}</h5>
            <div className="flex justify-center gap-4 items-center">
                <h5 className="text-xl font-semibold w-16 h-16 flex items-center justify-center">{value}</h5>
            </div>
        </div>
    )
}

export default CardBasic;
