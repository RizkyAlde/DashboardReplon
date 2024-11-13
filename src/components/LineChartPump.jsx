import Chart from "react-apexcharts";

const LineChartPump = ({ options, series, width }) => {
    return (
        <div className="app bg-white rounded-lg">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="line" // Mengganti bar dengan line untuk grafik garis
                        width={width}
                    />
                </div>
            </div>
        </div>
    );
}

export default LineChartPump;
