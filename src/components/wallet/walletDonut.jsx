import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Balance", value: 45 },
  { name: "Earnings", value: 35 },
  { name: "Withdrawal", value: 20 },
];

const COLORS = ["#4A4A4A", "#3BAA5C", "#85681E"];

 function WalletDonutChart() {
  return (
    <div className="w-[310px] h-[310px] flex items-center justify-center relative">
      <PieChart width={230} height={230}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={59}
          outerRadius={110}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <div className="absolute text-center">
        <h3 className="text-white text-lg font-semibold">₦5,500.29</h3>
        <p className="text-gray-400 mt-[5px] text-[10px] tracking-wide mt-1">
          WALLET BALANCE
        </p>
      </div>
    </div>
  );
}

function Legends() {
  return (
    <div className='flex items-center gap-[18px] ' >
      <div className="flex items-center gap-[5px] " >
        <div className="w-[19px] h-[19px] bg-[#4A4A4A] rounded-[2px] "></div>
        <p className="text-[9px] " > Balance </p>
      </div>
      <div className="flex items-center gap-[5px] " >
        <div className="w-[19px] h-[19px] bg-[#3BAA5C] rounded-[2px] "></div>
        <p className="text-[9px] " > Earnings </p>
      </div>
      <div className="flex items-center gap-[5px] " >
        <div className="w-[19px] h-[19px] bg-[#85681E]  rounded-[2px] "></div>
        <p className="text-[9px] " > Withdrawals </p>
      </div>
    </div>
  );
}


export default function WalletBreakDown(){
    return (
        <div className="flex flex-col border-[1px] border-[#2C2C2C] bg-[#000] rounded-[10px] px-[25px] py-[15px] items-center gap-[6px] " >
            <Legends />
            <WalletDonutChart />
        </div>
    )
}