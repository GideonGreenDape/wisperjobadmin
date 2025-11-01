const SelectableCard = ({
  id,
  title,
  description,
  image,
  selected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`relative bg-[#0F0F0F] border rounded-[16px] w-[239px] h-[300px] cursor-pointer transition-all duration-300
        ${
          selected
            ? "border-[2px] border-[#168DE1] shadow-[0_0_12px_2px_#168DE1]"
            : "border border-[#404040] hover:shadow-[0_0_8px_#168DE1]"
        }`}
    >
      <div
        className={`absolute top-[32px] left-[31px] w-[20px] h-[20px] rounded-full border transition-colors 
          ${selected ? "border-[#168DE1] bg-[#168DE1]" : "border-[#168DE1]"}`}
      ></div>

      <img
        src={image}
        alt={title}
        className="absolute top-[75px] left-[79px] w-[70px] h-[70px] object-contain"
      />

      <div className="absolute top-[181px] left-[28px] w-[200px]  flex flex-col items-center gap-[10px]">
        <h3 className="text-white font-urbanist font-semibold text-[15px]  ">
          {title}
        </h3>

        <p className="text-[#AEAEAE] font-urbanist font-normal text-[13px]   text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SelectableCard;

// use case

// const RoleSelection = () => {
//   const [selectedRole, setSelectedRole] = useState(null);

//   return (
//     <div className="flex gap-6 justify-center mt-10">
//       <SelectableCard
//         id="recruiter"
//         title="As a Recruiter"
//         description="Post jobs, review candidates, and connect with top professionals worldwide—all in one place."
//         image={recruiterImg}
//         selected={selectedRole === "recruiter"}
//         onSelect={setSelectedRole}
//       />
