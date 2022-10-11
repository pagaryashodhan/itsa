import Team from "./teams.json";
import Carousel from "./Carousel";
const Teams = () => {
  return Team.map((data) => (
    <div className="teams-carousel">
      <Carousel title={data.name} members={data.members} />
    </div>
  ));
};
export default Teams;