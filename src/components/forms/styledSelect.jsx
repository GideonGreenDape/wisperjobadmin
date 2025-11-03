import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sizes = {
  sm: "w-[162px] h-14",
  md: "w-[350px] h-[38px]",
  lg: "w-[567px] h-[38px]",
  xl: "w-[766px] h-14",
  xxl: "w-[951px] h-14",
  textarea: "w-[31vw] h-[38px]",
  smtextarea: "w-[28vw] h-[38px]",
  full: "w-[65vw] h-[38px]",
};

const AccessibleAnimatedSelect = ({
  config,
  value,
  onChange,
  size = "md",
  className = "",
  labelClassName = "",
  error = "",
  placeholder = "Select...",
}) => {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const isError = Boolean(error);
  const ref = useRef(null);
  const options = config?.values || [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!open) {
      if (["ArrowDown", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          onChange(options[highlightedIndex]);
        }
        setOpen(false);
        break;

      case "Escape":
        e.preventDefault();
        setOpen(false);
        setHighlightedIndex(-1);
        break;

      default:
        break;
    }
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col mb-3 relative ${className}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {config?.label && (
        <label
          className={`mb-[6px] font-light text-white text-[12px] ${labelClassName}`}
        >
          {config.label}
        </label>
      )}

      
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between cursor-pointer rounded-[5px] ${sizes[size]} px-[10px]
          ${isError ? "border border-red-500" : "border border-[#2c2c2c]"}
          bg-[#181818] text-white text-[13px] font-light select-none`}
      >
        <span className={`${value ? "text-white" : "!text-[#8c8c8c]"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute ml-[40px]  mt-[65px] rounded-[7px]  py-[15px] bg-[#000] px-[14px]  w-[250px] z-550 shadow-lg"
          >
            <h4 className="mb-[25px] " >{config.label}</h4>
            {options.map((val, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onChange(val);
                  setOpen(false);
                  setHighlightedIndex(-1);
                }}
                onMouseEnter={() => setHighlightedIndex(idx)}
                className={`px-[10px] py-[12px] mb-[12px] text-white text-[13px] bg-[#2a2a2a] rounded-[5px] font-light cursor-pointer transition-all
                ${
                  highlightedIndex === idx
                    ? "bg-[#2a2a2a]"
                    : "hover:bg-[#2a2a2a]"
                }`}
              >
                {val}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccessibleAnimatedSelect;
