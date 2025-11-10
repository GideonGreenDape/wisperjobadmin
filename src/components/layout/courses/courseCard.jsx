function CourseCard({
  profilePhoto,
  coursetitle,
  description,
  price,
  onClick,
}) {
  const shortDescription = description
    ? description.split(" ").slice(0, 10).join(" ") +
      (description.split(" ").length > 10 ? "..." : "")
    : "";

  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-[15px] rounded-[9px]
       bg-[#000] w-fit px-[15px] py-[20px] cursor-pointer 
       hover:scale-[1.02] transition-all duration-200"
    >
      <img
        className="w-[192px] h-[133px]"
        src={`${import.meta.env.VITE_API_FOR_IMAGE}${profilePhoto}`}
        alt=""
      />
      <h4 className="text-[15px] font-normal">{coursetitle}</h4>
      <p className="text-[13px]">{shortDescription}</p>
      <p className="text-[15px] !text-[#99D1F6]">₦{price}</p>
    </div>
  );
}

export default CourseCard;
