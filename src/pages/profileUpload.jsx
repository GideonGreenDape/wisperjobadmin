import AccountSetup from "../components/layout/accountSetup";
import Header from "../components/layout/Header";
import { useState, useRef } from "react";
import Icons from "../assets/icons";
import Button from "../components/ui/button";
import { postRequest, uploadRequest } from "../http/request";
import { useToast } from "../components/Toast/ToastContext";
import { useNavigate } from "react-router-dom";

function ProfileUploadPage() {
  const navigate = useNavigate(); 

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const { showToast } = useToast();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
      setFile(selectedFile);

      
      const formData = new FormData();
      formData.append("photo", selectedFile);

      try {
        setLoading(true);
        const response = await uploadRequest("/profile/photo", formData);

        if (response?.status === 200 || response?.success) {
           setUploadSuccess(true);
          showToast("Profile photo uploaded successfully!", "success");
        } else {
          showToast(response?.message || "Failed to upload photo", "error");
        }
      } catch (error) {
        console.error("Upload error:", error);
        showToast(error?.message || "Error uploading photo", "error");
      } finally {
        setLoading(false);
      }
      
    }
  };

   const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <>
      <Header />
      <div className="flex gap-[40px] mt-[40px] justify-center">
        <AccountSetup />
        <div className="flex flex-col gap-[20px] mt-[10px]">
          <p className="text-[12px]">
            <span className="font-normal text-[12px] !text-[#168DE1]">
              {"Account setup > "}
            </span>
            Add ProfilePicture
          </p>

          <div className="bg-[#000000] flex gap-[115px] h-[350px] items-center rounded-[18px] px-[55px] py-[55px]">
            <div onClick={handleGoBack} className="ml-[30px] self-end w-[30px] h-[30px]">
              <img
                className="w-[34px] h-[34px] cursor-pointer"
                src={Icons.backarrow}
                alt="backward icon"
              />
            </div>

            <div className="flex flex-col gap-[10px] items-center relative">
              <div
                className={`w-[100px] h-[100px] rounded-full overflow-hidden bg-[#484747] cursor-pointer flex items-center justify-center ${
                  loading ? "opacity-50" : ""
                }`}
                onClick={handleIconClick}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Icons.ImageIcon
                    size={35}
                    strokeWidth={1}
                    className="text-gray-400"
                  />
                )}
              </div>

              {/* {loading && (
                <p className="absolute bottom-[-25px] text-white text-[12px] animate-pulse">
                  Uploading...
                </p>
              )} */}

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              {!image ? (
                <>
                  <h4 className="text-white mt-[10px]">Add Profile Picture</h4>
                  <p className="text-[13px] mt-[-7px] !text-[#D1D1D1] w-[240px] text-center">
                    A professional headshot doubles your chances of getting
                    engagements.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center gap-[5px] ">
                  <p
                    onClick={handleIconClick}
                    className="text-[#168DE1] text-center w-[240px] text-underline text-[15px] mt-[10px] cursor-pointer "
                  >
                    Replace
                  </p>
                  <hr className="w-[60px] border-t border-[#168DE1]" />
                </div>
              )}
            </div>

            <Button
              size="sm"
              variant="secondary"
              className="self-end mb-5 text-[#ffffff] rounded-[7px]"
              to={"/dashboard"}
            >
             {uploadSuccess ? "Next" : "Skip"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUploadPage;
