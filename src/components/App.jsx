import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import localStorage from '../services/localStorage';
import CreatePage from './Create-Page/CreatePage';
import { useLocation, matchPath } from 'react-router';
<<<<<<< HEAD
import Landing from './Landing';
=======
import logo from '../images/solo-logo.png';
import { Link } from 'react-router-dom';

>>>>>>> 21e38ec1107b3f287cb928d85e8836b785e514bc

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
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              avatarProfile={avatarProfile}
              avatar={avatar}
              data={data}
            />
          }
        />
        <Route
          path="/CreatePage"
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
    </>
  );
}

export default App;
