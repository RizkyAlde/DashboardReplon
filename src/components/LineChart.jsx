import Chart from "react-apexcharts";

const LineChart = ({ options, series, width }) => {
    return (
        <div className="app bg-white rounded-lg">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width={width}
                    />
                </div>
            </div>
        </div>
    );
}

export default LineChart;