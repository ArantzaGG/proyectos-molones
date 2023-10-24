import '../styles/App.scss';
import { useState } from 'react';
import {Routes, Route} from "react-router";
import Header from './Header/Header';
import Form from './Create-Page/Form';
import CardPreview from './Create-Page/cards/CardPreview';
import localStorage from '../services/localStorage';
import Footer from './Footer/Footer';


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

  //ruta principal / = landing
  // ruta contenedor del <div>

  return (
    <div className='container'>
      <Header />
      <div className='div__MQ'>
        <main className='main'>
          <CardPreview
            avatar={avatar}
            data={data}
            avatarProfile={avatarProfile}
          />
          <Form
            updateAvatarProfile={updateAvatarProfile}
            avatarProfile={avatarProfile}
            updateAvatar={updateAvatar}
            avatar={avatar}
            data={data}
            updateInput={updateInput}
            updateCard={updateCard}
            error={error}
          />
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
