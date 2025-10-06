import Icons from "@/assets/icons"; 
import cn from "classnames"; 

const Header = ({ logoWidth = 140, logoHeight = 48 }) => {
  return (
    <header
      className={cn(
        "w-full h-[127px] bg-[#0D0D0D] flex items-center"
      )}
    >
      <div
        className="flex items-center gap-3 ml-16"
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
