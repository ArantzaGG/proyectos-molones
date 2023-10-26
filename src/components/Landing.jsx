import logo from '../images/solo-logo.png';
import { Link } from 'react-router-dom';
import CardData from '../components/Create-Page/cards/CardData';

function Landing({ avatar, avatarProfile, data }) {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <p className="header__text">Proyectos Molones</p>
      </header>
     
        <div className="landing">
            <section>
          <img className="landing__logo" src={logo} alt="logo" />
          <h1 className="landing__title">Proyectos Molones</h1>
          <h2 className="landing__subtitle">
            ¿Quieres publicar tu proyecto con nosotras?
          </h2>
          <p className="landing__p">¡Has llegado a la web correcta!</p>
          </section>
          <section className="container">
            <CardData
              avatar={avatar}
              data={data}
              avatarProfile={avatarProfile}
            />
          </section>
          <Link to="/CreatePage">
            <button className="btn-Start">Comienza Ahora</button>
          </Link>
        </div>
   
    </>
  );
}
export default Landing;
