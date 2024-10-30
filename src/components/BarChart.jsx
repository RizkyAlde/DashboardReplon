import Chart from "react-apexcharts";

const BarChart = ({ options, series, width }) => {
    return (
        <div className="app bg-white rounded-lg">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        width={width}
                    />
                </div>
            </div>
        </div>
    );
}

export default BarChart;