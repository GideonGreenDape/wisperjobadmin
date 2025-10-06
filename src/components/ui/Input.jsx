const sizes = {
  sm: "w-[162px] h-[56px] ",
  md: "w-[363px] h-[56px] ",
  lg: "w-[547px] h-[56px] ",
  xl: "w-[766px] h-[56px] ",
  xxl: "w-[951px] h-14 ",
  textarea: "w-[951px] h-14 ",
  full: "w-full h-14 ",
};

const Input = ({
  label,
  value,
  onchange,
  addon = null,
  size = "md",
  type = "text",
  placeholder,
  className = "",
  inputClassName = "",
  labelClassName = "",
  error = "",
}) => {
  const isError = Boolean(error);

  return (
    <div className={`flex flex-col mb-3 ${className}`}>
      {label && (
        <label
          className={`mb-[6px] font-normal text-[#ffffff] text-[17px] ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center rounded-[12px] overflow-hidden ${
          isError ? "border border-red-500" : "border border-[#2c2c2c]"
        } bg-[#181818]  `}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onchange(e.target.value)}
          placeholder={placeholder}
          className={`${sizes[size]} 
        flex-1 border-none bg-transparent text-[20px] 
        font-normal text-[#ffffff] placeholder-[#8c8c8c] pl-[14px] pt-3 pr-[10px] focus:outline-none
        ${inputClassName}  ${
            isError
              ? " focus:ring-2 focus:ring-red-500"
              : " focus:ring-2 focus:ring-blue-500"
          }   
        }`}
        />
        {addon && (
          <span className="px-3 text-white text-[20px] font-normal  ">
            {addon}{" "}
          </span>
        )}
      </div>
    </div>
  );
};


export default Input;