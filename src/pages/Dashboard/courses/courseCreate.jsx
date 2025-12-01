import Input from "../../../components/ui/Input";
import TextArea from "../../../components/forms/textarea";
import ImageUploader from "../../../components/ui/imageuploader";
import Button from "../../../components/ui/button";
import { dummyCourses } from "../../../dummy/dummycourse";
import { uploadRequest } from "../../../http/request";
import { useToast } from "../../../components/Toast/ToastContext";
import { useState } from "react";

function CourseCreate() {
  const [courseTitle, setcourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const { showToast } = useToast();



  const handleFileReceived = (file) => {
    setUploadedFile(file);
    console.log("File received:", file);
  };

  const handleSave = async () => {
    try {
      if (!courseTitle) {
        showToast("Title is required");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("title", courseTitle);
      formData.append("description", description);
      formData.append("price", price);

      if (uploadedFile) {
        formData.append("image", uploadedFile);
      }

      const response = await uploadRequest("/courses", formData);

      console.log("Created:", response);
      showToast("Course created successfully!");
    } catch (error) {
      console.error(error);
      showToast(error?.message || "Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-[20px] gap-[30px] ">
      <h6 className="text-[16px] ">Create Course </h6>
      <div className="flex flex-col gap-[25px] w-[70vw]  items-center bg-[#000] py-[20px] rounded-[15px] relative ">
        <Input
          label="Course Title"
          type="text"
          placeholder="E.g. Wireframing & Prototyping"
          size="slg"
          onchange={setcourseTitle}
          error=""
        />
        <TextArea
          label="Description "
          type="text"
          placeholder="Add a description of service "
          size="textarea"
          onchange={setDescription}
          error=""
        />
        <Input
          label="Set Price"
          type="text"
          placeholder="E.g.₦4000"
          size="slg"
          onchange={setPrice}
          error=""
        />
        <div className="flex flex-col gap-[6px] ">
          <p className=" ml-[30px] text-[11px] ">Upload image</p>
          <ImageUploader onFileChange={handleFileReceived} />
        </div>
      </div>
      <div className="flex w-[70vw] mb-[40px] items-center justify-between ">
        <Button
          size="md"
          variant="primary"
          className="text-[#ffffff] rounded-[7px] "
          to={"/dashboard"}
        >
          Back
        </Button>
        <Button
          size="md"
          variant="secondary"
          className="text-[#ffffff] rounded-[7px] "
          to={""}
          disabled={loading}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default CourseCreate;
