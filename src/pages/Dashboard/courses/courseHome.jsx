import { useEffect, useState } from "react";
import { getRequest } from "../../../http/request";
import CourseCard from "../../../components/layout/courses/courseCard";
import { useNavigate } from "react-router-dom";
import CourseStats from "../../../components/layout/courses/courseStats";
import Button from "../../../components/ui/button";
import SearchBar from "../../../components/ui/searchbar";
import Icons from "../../../assets/icons";

function CourseHome() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getRequest("/courses/all");
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    localStorage.setItem("selected_course_id", courseId);
    navigate("/dashboard/courses/edit-course");
  };

  return (
    <div className="flex flex-col mt-[30px] gap-[30px] ">
      <div className="flex items-center justify-between w-[70vw] ">
        <CourseStats />
        <Button
          size="smd"
          variant="secondary"
          className="self-end mb-5 text-[#ffffff] rounded-[7px]"
          to="create-course"
        >
          Add New Course
        </Button>
      </div>
      <div className="flex items-center w-[70vw] justify-between " >
        <SearchBar width="w-[61.5vw] " placeholder="Search course by title " />
        {/* <Icons.FilterIcon size={19} /> */}
      </div>
      <div className="flex flex-wrap gap-[20px] w-[70vw] ">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            profilePhoto={course.profilePhoto}
            coursetitle={course.title}
            description={course.description}
            price={course.price}
            onClick={() => handleCourseClick(course._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseHome;
