import Icons from "../../assets/icons"
import Images from "../../assets/images"


function JobCard ({amount}){
  return (
    <div className="flex !bg-[#000] gap-[12px] py-[45px] rounded-[10px] px-[30px] items-center ">
      <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center !bg-[#fff] border-[#05263D]/80 border-[4px] ">
        <Icons.JobIcon  size={22} style={{ stroke: "#05263D" }} strokeWidth={1} />
      </div>
      <div className="flex flex-col items-center gap-[10px] ">
        <p className="text-[12px] !text-[#AEAEAE] " > JOBS POSTED </p>
        <h4 className="text-white text-[22px]  ">{amount}</h4>
      </div>
    </div>
  )
}

function CoursesCard ({numberOfCourses}){
  return (
    <div className="flex !bg-[#000] gap-[12px] py-[45px] rounded-[10px] px-[30px] items-center  ">
      <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center !bg-[#fff] border-[#05263D]/80 border-[4px] ">
        <Icons.CourseIcon  size={22} style={{ stroke: "#05263D" }} strokeWidth={1} />
      </div>
      <div className="flex flex-col items-center gap-[10px] ">
        <p className="text-[12px] !text-[#AEAEAE] " > COURSES </p>
        <h4 className="text-white text-[22px] ">{numberOfCourses}</h4>
      </div>
    </div>
  )
}


function WalletBalance({ balance }) {
  return (
    <div
      style={{
       backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url(${Images.walletbackground})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center gap-[9px] w-[130px] h-[110px] rounded-[5px] px-[15px] py-[15px] text-white"
    >
      <p className="text-[14px]">WALLET BALANCE</p>
      <h4 className="text-[19px] font-bold">₦{balance}</h4>
      <div className="flex items-center gap-[5px] ">
        <p className="text-[13px] !text-[#F4BE37]">Open Wallet</p>
        <Icons.CornerRightUp size={16} style={{ stroke: "#F4BE37" }}   />
      </div>
    </div>
  );
}


function JobCards({label, value , width, height}){
  return (
    <div className={`flex flex-col rounded-[10px] items-center justify-center bg-[#000] gap-[5px] ${width} ${height} px-[15px] py-[10px] `}>
           <p className="text-[11px] !text-[#AEAEAE] " >{label}</p>
           <h4 className="text-[25px] " >{value} </h4>
    </div>
  )
}




export {JobCard, CoursesCard, WalletBalance, JobCards}