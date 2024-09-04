import {
  BarChart as RC_BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  //   YAxis,
  //   CartesianGrid,
} from "recharts";

const BarChart = ({data}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={340}>
        <RC_BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <YAxis /> */}
          <XAxis
            dataKey="name"
            style={{
              fontSize: "var(--small-font-size)",
              fontFamily: "var(--font-family-inside)",
            }}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill={data.map((t) => t.color)}
            background={{ fill: "transparent" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={data.map((t) => t.color)[index]}
              />
            ))}
          </Bar>
        </RC_BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChart;
