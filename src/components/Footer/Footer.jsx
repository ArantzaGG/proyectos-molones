import logo from '../../images/solo-logo.png'
const Footer = () => {
  return (
    
      <footer className='footer'>
        <img src={logo} alt="logo" className='footer__logo'/>
        <p className='footer__text'>Proyectos Molones</p>
      </footer>
      
  );
};

export default Footer;