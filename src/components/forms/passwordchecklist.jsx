import Icons from "../../assets/icons";

const PasswordChecklist = ({ password }) => {
  const rules = [
    { label: "8 characters", valid: password.length >= 8 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "One number", valid: /\d/.test(password) },
    {
      label: "One special character eg !^@#(",
      valid: /[!@#$%^&*(),.?\":{}|<>]/.test(password),
    },
  ];

  return (
    <div
      className="bg-black rounded-lg flex flex-col text-white p-3"
      style={{
        width: "262px",
        // height: "147px",
        gap: "2px",
      }}
    >
      
      <p className="text-[10px] text-[#ffffff] font-light ">PASSWORD MUST CONTAIN AT LEAST</p>

      
      <div className="flex flex-col gap-[5px]">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 h-[20px]"
          >
            <Icons.CircleCheck
              size={16}
              strokeWidth={2}
              className={rule.valid ? "text-[#168DE1]" : "text-[#f9f9f9] "}
            />
            <span
              className={`text-[10px] ml-[10px] ${
                rule.valid ? "text-[#168DE1]" : "text-[#f9f9f9]"
              }`}
            >
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordChecklist;
