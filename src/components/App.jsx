import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import localStorage from '../services/localStorage';
import CreatePage from './Create-Page/CreatePage';
import { useLocation, matchPath } from 'react-router';
import logo from '../images/solo-logo.png';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  const [error, setError] = useState('');

  const [data, setData] = useState(
    localStorage.get('storagedData', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    })
  );
  const updateInput = (data) => {
    setData(data);
  };

  const updateCard = (error) => {
    setError(error);
  };

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    data.photo = avatar;
  };

  const [avatarProfile, setAvatarProfile] = useState('');
  const updateAvatarProfile = (avatarProfile) => {
    setAvatarProfile(avatarProfile);
    data.image = avatarProfile;
  };

  
  const { pathname } = useLocation();
  const routeData = matchPath('/CreatePage', pathname);
  console.log(routeData);

  return (
    <div className='landing'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <header className='header'>
                <img src={logo} alt='logo' className='header__logo' />
                <p className='header__text'>Proyectos Molones</p>
              </header>
              <img className='Logo' src={logo} alt='logo' />
              <h1>Proyectos Molones</h1>
              <h2>¿Quieres publicar tu proyecto con nosotras?</h2>
              <p>¡Has llegado a la web correcta!</p>
              <Link to='/CreatePage'>
                <button className='btn-Start'>Comienza Ahora</button>
              </Link>

              <Footer />
            </>
          }
        />
        <Route
          path='/CreatePage'
          element={
            <CreatePage
              updateAvatarProfile={updateAvatarProfile}
              avatarProfile={avatarProfile}
              updateAvatar={updateAvatar}
              avatar={avatar}
              data={data}
              updateInput={updateInput}
              updateCard={updateCard}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
