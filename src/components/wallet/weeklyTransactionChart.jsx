import { AreaChart, XAxis, YAxis, Area, Tooltip, Legend } from "recharts";

const data = [
  { day: "Mon", earning: 15000, withdrawal: 10000 },
  { day: "Tue", earning: 25000, withdrawal: 18000 },
  { day: "Wed", earning: 35000, withdrawal: 26000 },
  { day: "Thu", earning: 38000, withdrawal: 27000 },
  { day: "Fri", earning: 10000, withdrawal: 20000 },
  { day: "Sat", earning: 2000, withdrawal: 12000 },
  { day: "Sun", earning: 2000, withdrawal: 8000 },
];

const OFFSET = 2000;

// Adjusted data with offsets
const adjustedData = data.map((d) => ({
  ...d,
  earningOffset: d.earning + OFFSET,
  withdrawalOffset: d.withdrawal + OFFSET,
}));

export default function WeeklyTransactionChart() {
  // Compute max Y value
  const maxY = Math.max(
    ...adjustedData.map((d) => Math.max(d.earningOffset, d.withdrawalOffset))
  );

  // Generate 6 evenly spaced Y ticks including an extra at the top
  const numTicks = 6;
  const step = Math.ceil(maxY / (numTicks - 1));
  const yTicks = Array.from({ length: numTicks }, (_, i) => i * step);
  // Add one extra top tick for NGN
  yTicks.push(yTicks[yTicks.length - 1] + step);

  return (
    <AreaChart
      style={{
        width: "100%",
        maxWidth: "640px",
        aspectRatio: "1.36",
        fontSize: "10px",
        backgroundColor: "#000",
      }}
      data={adjustedData}
      margin={{ top: 30, right: 10, left: 0, bottom: 20 }}
    >
      <defs>
        <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3CCF7A" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#3CCF7A" stopOpacity={0} />
        </linearGradient>

        <linearGradient id="withGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E14C4C" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#E14C4C" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* X-axis with “Days” label after Sunday */}
      <XAxis
        dataKey="day"
        padding={{ left: 10, right: 10 }}
        tickFormatter={(value, index) =>
          index === data.length - 1 ? "Days" : value
        }
      />

      {/* Y-axis with NGN on top */}
      <YAxis
        type="number"
        width={50}
        ticks={yTicks}
        domain={[0, yTicks[yTicks.length - 1]]} // ensure axis covers extra tick
        tickFormatter={(value, index) =>
          index === yTicks.length - 1 ? "NGN" : value
        }
      />

      <Legend
        verticalAlign="middle"
        layout="vertical"
        align="right"
        iconType="circle"
        iconSize={8}
        content={(props) => {
          const { payload } = props;
          return (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {payload.map((entry, index) => (
                <li
                  key={`item-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor:
                        entry.value === "earning" ? "#3CCF7A80" : "#E14C4C80",
                      marginRight: 6,
                    }}
                  />
                  <span style={{ color: "#fff", fontSize: 10 }}>
                    {entry.value}
                  </span>
                </li>
              ))}
            </ul>
          );
        }}
      />

      <Area
        type="monotone"
        dataKey="earningOffset"
        stroke="#3CCF7A"
        strokeWidth={1}
        fill="url(#earnGrad)"
        dot={{ r: 1 }}
        activeDot={{ r: 1 }}
        name="earning"
      />

      <Area
        type="monotone"
        dataKey="withdrawalOffset"
        stroke="#E14C4C"
        strokeWidth={1}
        fill="url(#withGrad)"
        dot={{ r: 1 }}
        activeDot={{ r: 1 }}
        name="withdrawal"
      />
    </AreaChart>
  );
}
