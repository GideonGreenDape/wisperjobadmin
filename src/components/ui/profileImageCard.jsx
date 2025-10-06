import React, { useEffect, useState } from "react";
import Images from "../../assets/images";

const ProfileImageCard = ({ userId, alt = "Profile" }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const res = await fetch(`/api/users/${userId}/profile-image`);
        const data = await res.json();
        setImageUrl(data?.imageUrl);
      } catch (err) {
        console.error("Error fetching profile image:", err);
      }
    };

    if (userId) fetchProfileImage();
  }, [userId]);

  return (
    <div
      className="w-[60px] h-[60px] rounded-full border border-[#2C2C2C]/50 overflow-hidden"
      style={{ borderWidth: "0.5px" }}
    >
      <img
        src={imageUrl || Images.defaultimage}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImageCard;
