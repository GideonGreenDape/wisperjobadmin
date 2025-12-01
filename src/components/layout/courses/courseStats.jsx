function CourseStats({totalNumber}) {
    return(
        <div className="flex flex-col gap-[6px] items-center w-fit " >
            <p className=" !text-[#AEAEAE] text-[13px] " >COURSE LISTED</p>
            <h3 className="text-[18px] " >{totalNumber}</h3>
        </div>
    )
}


export default CourseStats;