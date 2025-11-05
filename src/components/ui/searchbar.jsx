import { useState } from "react";
import Icons from "../../assets/icons";

function SearchBar({ width, data, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    
    const filtered = data.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(value.toLowerCase());
      const typeMatch = job.jobType.toLowerCase().includes(value.toLowerCase());
      return titleMatch || typeMatch;
    });

    
    onSearch(filtered);
  };

  return (
    <div className="flex gap-[36px] items-center">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search job by title or category"
        className={`border border-[#8C8C8C]/60 h-[22px] text-[12px] rounded-[7px] px-[15px] py-[10px] ${width} focus:outline-none text-white bg-transparent`}
      />
      <div className="flex items-center justify-center w-[43px] h-[43px] border border-l border-[#8C8C8C]/60 rounded-[7px]">
        <Icons.SlidersVertical
          size={20}
          strokeWidth={1.5}
          style={{ stroke: "#8C8C8C" }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SearchBar;
