import Input from "../../../components/ui/Input";
import TextArea from "../../../components/forms/textarea";
import { useState } from "react";

function CourseCreate() {
  const [courseTitle, setcourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

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
          onchange={setcourseTitle}
          error=""
        />
      </div>
    </div>
  );
}


export default CourseCreate;
