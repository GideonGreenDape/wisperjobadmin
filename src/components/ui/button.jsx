import { Link } from "react-router-dom";

const baseStyles =
  "inline-flex items-center justify-center rounded-2xl border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";

const sizes = {
  smd: "h-[20px] w-[50px] text-[10px] ",
  sm: "h-[37px] w-[100px] text-[13px]",
  md: "h-[37px] w-[115px] text-[13px]",
  smd: "h-[41px] w-[145px] text-[12px] ",
  lg: "h-[40px] w-[360px] text-[13px]",
};

const variants = {
  primary:
    "bg-[#000000] text-[#ffffff] border-[#ffffff] hover:opacity-90 active:bg-gray-800 disabled:opacity-60",
  secondary:
    "bg-[#168DE1] text-white  border-[#168DE1] hover:bg-[#0f6dad] active:bg-[#093F66] disabled:opacity-60",
  outline:
    "bg-transparent text-black border-black hover:bg-gray-50 active:bg-gray-200 disabled:opacity-60",
  danger:
    "bg-red-600 text-white border-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-60",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  disabled = false,
  className = "",
  to,
  ...props
}) {
  const variantClass = variants[variant] || variants["primary"];
  if (!variants[variant]) {
    console.warn(`Button: unknown variant "${variant}", using "primary"`);
  }

  const sizeClass = sizes[size] || sizes["md"];
  if (!sizes[size]) {
    console.warn(`Button: unknown size "${size}", using "md"`);
  }

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </>
  );

  
  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variantClass}  no-underline hover:no-underline ${sizeClass} ${className}`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  
  return (
    <button
      className={`${baseStyles} cursor-pointer ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
