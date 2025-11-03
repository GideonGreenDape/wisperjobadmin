import Input from "../../../components/ui/Input";
import TextArea from "../../../components/forms/textarea";
import AccessibleAnimatedSelect from "../../../components/forms/styledSelect";
import {
  jobType,
  location,
  qualification,
  ExperienceLevel,
  compensation,
} from "../../../config/dropdowns";
import Button from "../../../components/ui/button";
import { useState } from "react";

function JobEdit() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [jobLocation, setjobLocation] = useState("");
  const [compensationType, setcompensationType] = useState("");
  const [experienceLevel, setexperienceLevel] = useState("");
  const [qualificationLevel, setqualificationLevel] = useState("");
  const [applicationMethod, setApplicationMethod] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="flex flex-col mt-[20px] gap-[30px] ">
      <h6 className="text-[16px] ">Create new job </h6>
      <div className="flex flex-col gap-[25px] w-[70vw]  items-center bg-[#000] py-[20px] rounded-[15px] relative ">
        <Input
          label="Job Title"
          type="text"
          placeholder="E.g. Frontend Developer"
          size="slg"
          onchange={setJobTitle}
          error=""
        />
        <Input
          label="Company (optional) "
          type="text"
          placeholder="Company name"
          size="slg"
          onchange={setCompany}
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
        <div className="flex items-center gap-[20px] ">
          <AccessibleAnimatedSelect
            config={jobType}
            value={selectedJobType}
            onChange={setSelectedJobType}
            placeholder="Select Job Type"
            size="textarea"
          />
          <AccessibleAnimatedSelect
            config={ExperienceLevel}
            value={experienceLevel}
            onChange={setexperienceLevel}
            placeholder="Experience Level"
            size="textarea"
          />
        </div>
        <div className="flex items-center pl-[2.4%] self-start gap-[30px] ">
          <AccessibleAnimatedSelect
            config={compensation}
            value={compensationType}
            onChange={setcompensationType}
            placeholder="Select Job Type"
            size="smtextarea"
          />
          <div className="flex items-center gap-[15px] ">
            <Input
              label="Set Price "
              type="text"
              placeholder=" 400"
              size="sm"
              onchange={setPrice}
              error=""
            />
            <p className="text-[13px] mt-[20px]  "> /hour</p>
          </div>
        </div>
        <AccessibleAnimatedSelect
          config={location}
          value={jobLocation}
          onChange={setjobLocation}
          placeholder="Experience Level"
          size="full"
        />
        <AccessibleAnimatedSelect
          config={qualification}
          value={qualificationLevel}
          onChange={setqualificationLevel}
          placeholder="Experience Level"
          size="full"
        />
        <Input
          label="How do you want people to apply "
          type="text"
          placeholder=" E.g. Apply via email to"
          size="slg"
          onchange={setApplicationMethod}
          error=""
        />
        <Input
          label="Enter application URL "
          type="text"
          placeholder=" E.g. https://yoursite.com/apply"
          size="slg"
          onchange={setApplicationMethod}
          error=""
        />
      </div>

      <div className="flex w-[70vw] mb-[40px] items-center justify-between ">
        <Button
          size="md"
          variant="primary"
          className="text-[#ffffff] rounded-[7px] "
          to={""}
        >
          Back
        </Button>
        <Button
          size="md"
          variant="secondary"
          className="text-[#ffffff] rounded-[7px] "
          to={""}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default JobEdit;
