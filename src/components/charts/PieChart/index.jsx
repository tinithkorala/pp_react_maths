import { PieChart as MuiPieChart } from "@mui/x-charts";

const PieChart = ({dataSet}) => {
  return (
    <MuiPieChart
      series={[
        {
          data: dataSet,
        },
      ]}
      width={400}
      height={200}
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
    />
  );
};

export default PieChart;
