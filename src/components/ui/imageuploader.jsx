import { useState } from "react";
import Icons from "../../assets/icons";

export default function ImageUploader({ onFileChange }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setProgress(0);

   
    onFileChange && onFileChange(uploadedFile);

    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 400);
  };

  const deleteFile = () => {
    setFile(null);
    setProgress(0);

    onFileChange && onFileChange(null);
  };

  return (
    <div className="w-[910px] ml-[30px] mr-[40px] max-w-lg rounded-[9px]  bg-[#111] p-4 text-gray-200">
       
      {!file && (
        <label className="flex flex-col items-center  h-[100px] justify-center w-full py-6 rounded-lg cursor-pointer">
          <div className="flex items-center justify-center rounded-[30px] w-[30px] h-[30px] bg-[#000] ">
            <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#093F66] rounded-[24px] ">
              <Icons.CloudUpload
                size={17}
                stroke="#2FA0E8"
                className="text-blue-400 mb-2"
              />
            </div>
          </div>
          <p className="text-[12px] mt-[6px] ">
            Click to upload or{" "}
            <span className=" !text-[#2FA0E8] ">drag and drop</span>{" "}
          </p>
          <p className="text-[12px] mt-[5px] !text-[#2FA0E8] text-gray-400 mt-1">
            PNG, JPG
          </p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}

      {file && (
        <div className="flex flex-col items-center h-[100px] gap-[10px] justify-center px-[20px] ">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center gap-[9px] ">
              <div className=" flex  items-center justify-center w-[35px] h-[35px] rounded-[25px] bg-[#2C2C2C] ">
                <Icons.ImageIcon2
                  size={20}
                  stroke="#2FA0E8 "
                  className="text-blue-300"
                />
              </div>
              <div className="flex flex-col gap-[2px] ">
                <p className="text-[12px] !text-[#AEAEAE] ">{file.name}</p>
                <p className="text-[10px] !text-[#667085] ">
                  {(file.size / 1024).toFixed(0)} KB
                </p>
              </div>
            </div>

            <Icons.Delete
              onClick={deleteFile}
              size={16}
              stroke="#AEAEAE"
              className="cursor-pointer  "
            />
          </div>

          <div className="flex items-center gap-[12px] w-[90%] ">
            <div className="w-[98%] bg-[#2C2C2C] rounded-[5px] mt-2 h-[5px] ">
              <div
                className="bg-[#2FA0E8] h-[5px] rounded-[5px] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-[11px] ">{progress}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
