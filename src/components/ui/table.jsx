import { ArrowDown, ArrowUp } from "lucide-react";
const transactions = [
  { id: 1, amount: 2500, title: "Job ad", time: "Today, 10:00am" },
  { id: 2, amount: 2500, title: "Course Listing", time: "Today, 1:30am" },
  { id: 3, amount: 7500, title: "Withdrawal", time: "Yesterday, 2:00pm" },
  { id: 1, amount: 2500, title: "Job ad", time: "Today, 10:00am" },
  { id: 2, amount: 2500, title: "Course Listing", time: "Today, 1:30am" },
  { id: 3, amount: 7500, title: "Withdrawal", time: "Yesterday, 2:00pm" },
];

export default function RecentTransactionsTable() {
  return (
    <div
      className="bg-[#151515] rounded-xl text-white shadow-sm relative"
      aria-label="Recent transactions panel"
    >
      <div className="mt-2 rounded-t-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#000]  text-[11px] uppercase text-[#8b8b8b] font-thin ">
              <th
                style={{ width: "30%", fontWeight: "300" }}
                className="pl-[12px] py-[15px] text-left"
              >
                AMOUNT
              </th>
              <th style={{ width: "50%", fontWeight: "300" }} className="px-3 py-2 text-left">
                TRANSACTION
              </th>
              <th
                style={{ width: "20%", fontWeight: "300" }}
                className="pr-[10px] text-right"
              >
                DATE & TIME
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="relative mx-[20px] mt-2  pb-4">
        <div className="overflow-y-auto pr-[18px]  " style={{ maxHeight: 160 }}>
          <table className="w-full border-collapse  ">
            <tbody className="scrollable ">
              {transactions.map((t) => {
                const isWithdrawal = t.title.toLowerCase() === "withdrawal";

                const ArrowIcon = isWithdrawal ? ArrowDown : ArrowUp;
                const arrowColor = isWithdrawal
                  ? "text-[#E14C4C]"
                  : "text-[#3CCF7A]";

                return (
                  <tr
                    key={t.id}
                    className="border-b border-[#1a1a1a]   scrollable "
                  >
                    <td style={{ width: "30%" }} className=" py-4">
                      <div
                        className={`flex items-center gap-2 ${
                          isWithdrawal ? " !text-[#E14C4C]" : " !text-[#3CCF7A]"
                        }`}
                      >
                        <span
                          className={`text-[11px] font-normal ${
                            isWithdrawal
                              ? " !text-[#E14C4C]"
                              : " !text-[#3CCF7A]"
                          }`}
                        >
                          ₦{t.amount.toLocaleString()}
                        </span>

                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 26,
                            height: 18,
                            borderRadius: 4,
                            color: `${arrowColor} !important`,
                          }}
                        >
                          <ArrowIcon
                            color={isWithdrawal ? "#E14C4C" : "#3CCF7A"}
                            size={14}
                            strokeWidth={2}
                          />
                        </span>
                      </div>
                    </td>

                    <td
                      style={{ width: "30%" }}
                      className="px-3 py-4 text-[12px] text-[#d7d7d7]"
                    >
                      {t.title}
                    </td>

                    <td
                      style={{ width: "40%", textAlign: "end" }}
                      className="px-3 py-[15px] text-right text-[10px] text-[#a1a1a1]"
                    >
                      {t.time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-2" />
    </div>
  );
}
