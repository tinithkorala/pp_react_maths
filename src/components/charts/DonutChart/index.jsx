const DonutChart = () =>
  // { data1, data2, radius, strokeWidth }
  {
    const data1 = 60;
    const data2 = 80;

    const radius = 110;
    const strokeWidth = 10;

    const circumference = 2 * Math.PI * radius;
    const dashArray1 = `${(data1 / 100) * circumference} ${circumference}`;
    const dashArray2 = `${(data2 / 100) * circumference} ${circumference}`;

    return (
      <>
        <svg width={radius * 2} height={radius * 2}>
          <circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2 - 12}
            fill="none"
            stroke="red" // "var(--ateneo-blue-500)"
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray2}
          />
          <circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            fill="none"
            stroke="blue" // ""var(--ateneo-blue-300)"
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray1}
          />
        </svg>
      </>
    );
  };

export default DonutChart;
