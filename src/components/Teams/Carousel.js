import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Member_card";
import User from "./users.json";

const carousel = ({ title, id, members }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="container">
      <div className="Teams">
        <div className="team-title " data-aos={"fade-left"}>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="teams-container">
        <Carousel
          breakPoints={breakPoints}
          style={{
            borderBottom: "0.09rem solid skyBlue",
            paddingLeft: "5rem",
            paddingBottom: "2rem",
            paddingRight: "5rem",
          }}
          // showArrows={false}
          // enableAutoPlay={true}
          focusOnSelect={true}

          // autoPlaySpeed="2"
        >
          {members.map((data) => {
            const user = User.find((user) => user._id.$oid === data.$oid);
            return (
              <Card
                name={user.name}
                position={user.position}
                imageUrl={user.image_url}
                linkedInUrl={user.linkedin}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default carousel;
