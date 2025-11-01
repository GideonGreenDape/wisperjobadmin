const sizes = {
  sm: "w-[162px] h-14 ",
  md: "w-[363px] h-14 ",
  lg: "w-[567px] h-[38px] ",
  xl: "w-[766px] h-14 ",
  xxl: "w-[951px] h-14 ",
  textarea: "w-[547px] h-[38px] ",
  full: "w-full h-14 ",
};

const Select = ({
  config,
  value,
  onChange,
  size,
  className = "",
  selectClassName = "",
  labelClassName = "",
  error = "",
  addon = null,
  placeholder = "Select...",
}) => {
  const isError = Boolean(error);

  return (
    <div className={`flex flex-col mb-3  ${className}`}>
      {config?.label && (
        <label
          className={`mb-[6px] font-light text-white text-[13px] ${labelClassName}`}
        >
          {config.label}
        </label>
      )}
      <div
        className={`flex items-center rounded-[9px]  ${
          sizes[size]
        }  overflow-hidden ${
          isError ? "border border-red-500" : "border border-[#2c2c2c]"
        } bg-[#181818]`}
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${sizes[size]} focus:outline-none focus:ring-0
  appearance-none leading-normal border-none bg-transparent text-[13px] 
  font-light  placeholder-[#8c8c8c] pt-2 pl-[10px] 
  ${selectClassName} ${
            isError
              ? "focus:ring-2 focus:ring-red-500"
              : "focus:ring-2 focus:ring-blue-500"
          }`}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {config?.values?.map((val, idx) => (
            <option
              key={idx}
              value={val}
              className={`bg-[#181818] text-white text-[13px] ${sizes[size]} `}
            >
              {val}
            </option>
          ))}
        </select>
        {addon && (
          <span className="px-3 text-white text-[13px] font-normal">
            {addon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Select;
