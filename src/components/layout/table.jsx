import { useState } from "react";
import { Button } from "../ui/button";

const Table = ({ data, width }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className={`${width} mt-[-10px] text-[16px] text-white font-normal`}>
      {/* Header */}
      <div className="grid grid-cols-6 h-[49px] bg-[#000] border-b !border-[#2C2C2C] px-4">
        <div className="flex pl-[10px]  items-center"><p className="text-[11px] !text-[#AEAEAE] pl-[10px]  ">JOB TITLE</p></div>
        <div className="flex pl-[10px] text-[13px] items-center"><p className="text-[11px] !text-[#AEAEAE] ">JOB TYPE</p></div>
        <div className="flex pl-[10px] text-[13px] items-center"><p className="text-[11px] !text-[#AEAEAE] ">COMPANY</p></div>
        <div className="flex pl-[10px] text-[13px] items-center"><p className="text-[11px] !text-[#AEAEAE] ">APPLICATION</p></div>
        <div className="flex pl-[10px] text-[13px] items-center"><p className="text-[11px] !text-[#AEAEAE] ">STATUS</p></div>
        <div className="flex pl-[10px] text-[13px] items-center"><p className="text-[11px] !text-[#AEAEAE] ">ACTION</p></div>
      </div>

      {/* Rows */}
      {paginatedData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-6 border-b border-[#2C2C2C] px-4 py-2"
        >
          <div className="break-words text-[12px] items-center py-[10px] "><p className="text-[11px] pl-[15px] ">{row.title || "-------"}</p></div>
          <div className="break-words text-[12px] items-center py-[10px] "><p className="text-[11px]  pl-[15px]">{row.jobType || "-------"}</p> </div>
          <div className="break-words text-[12px] items-center py-[10px] "><p className="text-[11px]  pl-[15px]">{row.company || "-------"}</p></div>
          <div className="break-words text-[12px] items-center py-[10px] "><p className="text-[11px]  pl-[15px]">{row.application || "-------"}</p></div>
          <div
            className={`break-words text-[12px] py-[10px] `}
          >
            <p className={` text-[11px] pl-[15px] ${
      row.status === "Active" ? " !text-[#3BAA5C]" : " !text-[#FF231C]"
    }  `}>
            {row.status || "-------"}
            </p>
          </div>
          <div className="break-words text-[12px] items-center py-[10px] "><p className={` text-[11px] pl-[15px] ${
      row.action === "Disable" ? " !text-[#2FA0E8]" : " !text-[#2FA0E8]"
    }  `}>{row.action || "-------"}</p></div>
          
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between mt-[15px] items-center p-4 ">
        <Button
          variant="outline"
          size="smd"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </Button>

        <span className=" text-[10px] ">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          size="smd"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Table;
