
import logo from '../../images/solo-logo.png'
const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={logo} alt="logo" className='header__logo'/>
        <p className='header__text'>Proyectos Molones</p>
      </header>
      <section className='subHeader'>
        <h2 className='subHeader__h2'>Proyectos Molones</h2>
        <p className='subHeader__p'>
          En esta agencia, ningún proyecto podrá esconderse. El talento quedará
          al descubierto.
        </p>
        <button className='subHeader__btn'>VER PROYECTOS</button>
      </section>
    </div>
  );
};

export default Header;
