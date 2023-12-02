import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Teams = () => {
  const ArrayTeams = [
    {
      name: "Tribu de Dana",
      members: [
        {
          membername: "Guillaume",
          memberpng: "src/assets/guillaume.gif",
        },
        {
          membername: "Eymeric",
          memberpng: "src/assets/eymeric.gif",
        },
      ],
      description: "Description 1",
    },
    {
      name: "Tribu IKEA",
      members: [
        {
          membername: "Alexandre",
          memberpng: "src/assets/alexandre.gif",
        },
        {
          membername: "Clément",
          memberpng: "src/assets/clement.gif",
        },
      ],
      description: "Description 2",
    },
    {
      name: "Tribu Mixeur",
      members: [
        {
          membername: "Thibaut",
          memberpng: "src/assets/thibaut.gif",
        },
        {
          membername: "Manu",
          memberpng: "src/assets/manu.gif",
        },
        {
          membername: "Maël",
          memberpng: "src/assets/mael.gif",
        },
        {
          membername: "Lilas",
          memberpng: "src/assets/lilas.gif",
        },
      ],
      description: "Description 3",
    },
    {
      name: "Tribu du grindset",
      members: [
        {
          membername: "Mathieu",
          memberpng: "src/assets/mathieu.gif",
        },
        {
          membername: "Kevin",
          memberpng: "src/assets/kevin.gif",
        },
      ],
      description: "Description 4",
    },
  ];

  new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {ArrayTeams.map((team) => (
          <div className="swiper-slide">
            <h1>{team.name}</h1>
            <div className="team-container">
              {team.members.map((member) => (
                <div className="team-member">
                  <img src={member.memberpng} alt={member.membername} />
                  <h2>{member.membername}</h2>
                </div>
              ))}
            </div>
            <p>{team.description}</p>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Teams;
