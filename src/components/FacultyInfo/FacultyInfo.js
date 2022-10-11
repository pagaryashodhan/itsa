import Card from "./FacultyCard";
import faculty from "./faculty.json";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FacultyInfo = () => {
  return (
    <>
      <h2 className="mb-5 mt-5 text-center">Our Faculty Mentors</h2>
      <div
        className="container m-auto"
        id="faculty-container"
        style={{ margin: "auto" }}
        data-aos="fade-up"
      >
        <div className="row">
          {faculty.map((user, i) => (
            <div className="col-md-4" key={i}>
              <Card
                name={user.name}
                designation={user.designation}
                imgUrl={user.image_url}
                linkedInUrl={user.linkedin}
                twitterUrl={user.twitter}
                websiteUrl={user.website}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FacultyInfo;
