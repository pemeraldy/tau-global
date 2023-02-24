import React from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Layout/Footer/Footer";
import CourseDetailsMain from "../../components/CourseDetails/CourseDetailsMain";
import HeaderFour from "../../components/Layout/Header/Header";
// components / Layout / Header / Header;
import courses from "../../data/courses.json";
function CourseDetails() {
  const { query } = useRouter();
  const [courseDetail] = courses.filter((course) => course.id == query.id);
  console.log(courses.filter((course) => course.id == query.id));
  return (
    <React.Fragment>
      <HeaderFour />
      {courseDetail ? (
        <CourseDetailsMain course={courseDetail} />
      ) : (
        <div style={{ height: "90vh" }} className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12 flex justify-content-center align-items-center">
              <h1 className="text-center">Course Not Found</h1>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default CourseDetails;
