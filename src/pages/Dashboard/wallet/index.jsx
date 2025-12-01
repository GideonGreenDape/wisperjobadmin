import { EarningCards, WithdrawalCard } from "../../../components/wallet/earningCards";
import WeeklyTransactionChart from "../../../components/wallet/weeklyTransactionChart";
import WalletBreakDown from "../../../components/wallet/walletDonut";
import RecentTransactionsTable from "../../../components/ui/table";
import WithdrawalForm from "../../../components/ui/withdrawalform";


function Wallet() {
    return(
       <div className="flex  mt-[20px] gap-[55px] w-[70vw] pb-[60px] ">
          <div className="flex flex-col gap-[15px] px-[15px] " >
            <div className="flex gap-[5px] items-center " >
                <EarningCards />
                <WithdrawalCard />
            </div>
            <WeeklyTransactionChart / >
            <RecentTransactionsTable widthVW="20vw" />

          </div>
          
            <div className="bg-[#000] px-[53px] flex flex-col gap-[10px] " >
              <h3 className="mt-[15px] " >Your Wallet </h3>
                <WalletBreakDown />
                <WithdrawalForm />
            </div>
       </div>
    )
}


export default Wallet;


