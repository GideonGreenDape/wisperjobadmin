import Icons from "@/assets/icons"; 

const Header = ({ logoWidth = 90, logoHeight = 90 }) => {
  return (
    <header
      className=
        "w-full h-[60px] bg-[#0D0D0D] flex items-center"
    >
      <div
        className="flex items-center gap-3 ml-[35px] "
        style={{ width: logoWidth, height: logoHeight }}
      >
        <img
          src={Icons.WisperIcon }
          alt="Logo"
          style={{ width: logoWidth, height: logoHeight }}
        />
      </div>
    </header>
  );
};

export default Header;
