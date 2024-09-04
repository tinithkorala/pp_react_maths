import { PieChart } from "@mui/x-charts/PieChart";

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
  { label: "Group E", value: 278 },
  { label: "Group F", value: 189 },
];

const data2 = [
  { label: "Group A", value: 2400 },
  { label: "Group B", value: 4567 },
  { label: "Group C", value: 1398 },
  { label: "Group D", value: 9800 },
  { label: "Group E", value: 3908 },
  { label: "Group F", value: 4800 },
];

export default function DonutChart() {
  return (
    <PieChart
      series={[
        {
          cornerRadius: 40,
          data: data1,
          innerRadius: 40,
          outerRadius: 50,
          cx: 100,
          cy: 100,
        },
        {
          cornerRadius: 40,
          data: data2,
          innerRadius: 60,
          outerRadius: 70,
          cx: 100,
          cy: 100,
        },
      ]}
      height={300}
      width={"100%"}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}
