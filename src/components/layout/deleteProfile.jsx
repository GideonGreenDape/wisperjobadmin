import Button from "../ui/button";
import { deleteRequest } from "../../http/request";
import { useToast } from "../Toast/ToastContext";
import { useNavigate } from "react-router-dom";

function DeleteProfile({ onClose }) {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await deleteRequest("/profile/delete-account");
      showToast("Account deleted successfully", "success");
      localStorage.clear(); 
      navigate("/signup");
    } catch (error) {
      console.error("Error deleting account:", error);
      showToast("Error deleting account", "error");
    }
  };

  return (
    <div className="fixed rounded-[8px]  flex bg-[#000] items-center justify-center  z-50">
      <div className="flex flex-col bg-white w-fit px-[20px] py-[30px] rounded-[10px] items-center ">
        <p className="font-medium text-[18px] mb-[20px]">Delete Account?</p>
        <div className="flex items-center gap-[15px]">
          <Button
            size="sm"
            variant="primary  "
            className="text-white rounded-[7px] border-[0px] "
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="!text-[#000] rounded-[7px] border-[0px] "
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;
