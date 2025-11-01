import Images from "../../assets/images";
import { useState } from "react";

function MiniHeader({ width, display }) {
  const [logged, setLogged] = useState(false);

  
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  

  return (
    <div className={`${width} flex items-center justify-between py-[15px] border-b-[0.9px] border-[#AEAEAE]/60 px-[5px]`}>
      <div className="flex flex-col gap-[2px]">
        <h4 className="text-[13px] text-[#ffffff]">{display}</h4>
        <p className="text-[13px] !text-[#AEAEAE]">{formattedDate}</p>
      </div>

      <div>
        {logged ? (
          <img src="" alt="profile" />
        ) : (
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={Images.defaultimage}
            alt="profile"
          />
        )}
      </div>
    </div>
  );
}

export default MiniHeader;
