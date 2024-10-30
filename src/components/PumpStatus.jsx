const PumpStatus = ({ pumpStatus, title }) => {
  return (
    <div className="text-center  bg-green-light p-4 rounded-2xl">
      <h2 className="font-semibold mb-2">{title}</h2>
      <p className="text-lg font-semibold p-4 bg-slate-200 rounded-2xl">{pumpStatus}</p>
    </div>
  );
}

export default PumpStatus;