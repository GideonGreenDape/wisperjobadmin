function CourseStats({totalNumber}) {
    return(
        <div className="flex items-center w-fit " >
            <p className=" !text-[#AEAEAE] text-[13px] " >COURSE LISTED</p>
            <h3 className="text-[16px] " >{totalNumber}</h3>
        </div>
    )
}


export default CourseStats;