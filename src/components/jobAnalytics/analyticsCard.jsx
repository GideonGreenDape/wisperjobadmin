const AnalyticsCard = ({ label, value }) => {
  
  const getValueClasses = () => {
    if (String(value).length > 9) return "text-[20px]"; 
    if (String(value).length > 6) return "text-[24px]"; 
    return "text-[32px]"; 
  };

  return (
    <div className="w-[206px] h-[150px] rounded-[8px] bg-[#0D0D0D] shadow-[0px_2px_4px_0px_#0000002E] flex flex-col items-center justify-center">
     
      <p className="font-[Urbanist] font-normal text-[14px] leading-none text-[#AEAEAE] mb-2">
        {label}
      </p>

      
      <p
        className={`font-[Urbanist] font-bold leading-none text-white tracking-[-0.045em] text-center ${getValueClasses()}`}
      >
        {value}
      </p>
    </div>
  );
};

export default AnalyticsCard;
