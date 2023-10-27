import CardData from "../components/Create-Page/cards/CardData";
import Header from "./Header/Header";
import "../styles/Landing.scss";
import "../styles/CardPreview.scss";
import SubHeader from "./Header/SubHeader";
import PropTypes from "prop-types";

function Landing({ avatar, avatarProfile, data }) {
  return (
    <>
      <Header />

      <div className="landing">
        <section className="landing__section1">
          <SubHeader
            title={"Proyectos Molones"}
            subTitle={"¿Te gustaría darte a conocer?"}
            desc={
              "Si estás buscando un lugar donde publicar tus proyectos para que el mundo conozca tu increible potencial y tus grandes capacidades, has llegado al sitio correcto."
            }
            textButton={"Comienza ahora"}
            btnLink={"/CreatePage"}
          />
        </section>
        <section className="landing_section2">
          <CardData
            avatar={avatar}
            data={data}
            avatarProfile={avatarProfile}
            className="landing_card"
          />
        </section>
      </div>
    </>
  );
}

Landing.propTypes = {
  avatar: PropTypes.string,
  data: PropTypes.string,
  className: PropTypes.string,
  avatarProfile: PropTypes.string,
};

export default Landing;
