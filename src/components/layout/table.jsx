import { useState } from "react";
import { Button } from "../ui/button";

const Table = ({ data }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="w-[967px] bg-black text-[16px] text-white font-normal">
      {/* Header */}
      <div className="grid grid-cols-5 h-[49px] border-b border-[#2C2C2C] px-4">
        <div className="flex items-center">JOB TITLE</div>
        <div className="flex items-center">JOB TYPE</div>
        <div className="flex items-center">COMPANY</div>
        <div className="flex items-center">APPLICATION</div>
        <div className="flex items-center">STATUS</div>
      </div>

      {/* Rows */}
      {paginatedData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-5 border-b border-[#2C2C2C] px-4 py-2"
        >
          <div className="break-words">{row.jobTitle || "-------"}</div>
          <div className="break-words">{row.jobType || "-------"}</div>
          <div className="break-words">{row.company || "-------"}</div>
          <div className="break-words">{row.application || "-------"}</div>
          <div
            className={`break-words ${
              row.status === "Active" ? "text-[#3BAA5C]" : "text-[#FF231C]"
            }`}
          >
            {row.status || "-------"}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t border-[#2C2C2C]">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
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
