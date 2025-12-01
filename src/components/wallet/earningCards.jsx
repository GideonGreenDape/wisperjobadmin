import Icons from "../../assets/icons";

function EarningCards({ Earned = "19,000", margin = "-2%" }) {
  const intEarned = parseInt(Earned);
  let checkValue;
  if (intEarned < 0) {
    checkValue = (
      <img src={Icons.loss} alt="loss icon" className="w-[16px] h-[16px] " />
    );
  } else {
    checkValue = (
      <img
        src={Icons.profit}
        alt="profit icon"
        className="w-[16px] h-[16px] "
      />
    );
  }

  return (
    <div className="flex flex-col bg-[#000] rounded-[13px] gap-[12px] w-[190px] py-[20px] pl-[12px] pr-[5px] " >
      <p className='text-[10px] ' >Earnings</p>
      <div className="flex items-start gap-[27px] " >
        <h3 className="text-[16px] ">₦{Earned}</h3>
        <div className="flex flex-col gap-[4px] " >
          <div className="flex items-center gap-[4px] ">
            {checkValue} <p className=" text-[14px] ">{margin}</p>
          </div>
          <p className="text-[10px] ">Compared to last week</p>
        </div>
      </div>
    </div>
  );
}

function WithdrawalCard({ Withdrawal = "19,000", margin = "-2%" }) {
  const intEarned = parseInt(Withdrawal);
  let checkValue;
  if (intEarned < 0) {
    checkValue = (
      <img src={Icons.loss} alt="loss icon" className="w-[16px] h-[16px] " />
    );
  } else {
    checkValue = (
      <img
        src={Icons.profit}
        alt="profit icon"
        className="w-[16px] h-[16px] "
      />
    );
  }

  return (
    <div className="flex flex-col bg-[#000] rounded-[13px] gap-[12px] w-[190px] py-[20px] pl-[12px] pr-[5px] ">
      <p className='text-[10px] ' >Withdrawal</p>
      <div className="flex items-start gap-[27px]  "  >
        <h3 className="text-[16px] ">₦{Withdrawal}</h3>
        <div className="flex flex-col gap-[4px]" >
          <div className="flex items-center gap-[5px] ">
            {checkValue} <p className=" text-[14px] ">{margin}</p>
          </div>

          <p className="text-[10px] " >Compared to last week</p>
        </div>
      </div>
    </div>
  );
}


export { EarningCards, WithdrawalCard };
