import Header from "../components/layout/Header";
import SelectableCard from "../components/forms/selectableCard";
import { useState } from "react";
import Images from "../assets/images";
import Button from "../components/ui/button";

function TrackPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  return (
    <>
      <Header />

      <div className="flex flex-col  items-center mt-[50px] justify-center gap-[45px] ">
        <div className="flex flex-col items-center justify-center gap-[8px] ">
          <h4 className="font-urbanist text-[#ffffff] font-bold text-[21px] ">
            How would you like to use Wisper
          </h4>
          <p className="font-urbanist font-bold text-[13px]  ">
            Anyhow, we're here to help you with what is best for you
          </p>
        </div>

        <div className="flex items-center gap-[40px]  ">
          <SelectableCard
            id="recruiter"
            title="As a Recruiter"
            description="Post jobs, review candidates, and connect with top professionals worldwide—all in one place."
            image={Images.recuiterImage}
            selected={selectedRole === "recruiter"}
            onSelect={setSelectedRole}
          />

          <SelectableCard
            id="trainer"
            title="As a Trainer"
            description="Create, manage, and sell courses effortlessly while reaching learners across the globe."
            image={Images.trainerImage}
            selected={selectedRole === "trainer"}
            onSelect={setSelectedRole}
          />
        </div>

        <Button
          size="md"
          variant="secondary"
          className=" text-[#ffffff] rounded-[7px] "
          to={'/profile'}
        >
          Let's start
        </Button>
      </div>
    </>
  );
}

export default TrackPage;
