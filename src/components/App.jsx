import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header/Header';
import Form from './Create-Page/Form';
import CardPreview from './Create-Page/cards/CardPreview';



function App() {
  const [error, setError] = useState('');
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    photo: 'https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg?w=826&t=st=1697645747~exp=1697646347~hmac=a6bd8c5b9cbd31b4655f7b35f468d4ed1f77c919ef6501dd8e35fa52ff9f283b',
    image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-amor-mordedura-unicornio-lindo-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4091.jpg?w=826&t=st=1697645786~exp=1697646386~hmac=626ab92fb7909ab77417b7fcbf9d1488d5cc1d69075a84841ba488030918ef19'
  });
  const updateInput = (data) => {
    setData(data);
  };
  
  const updateCard = (error) => {
    setError(error);
  };

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };
 
  const [avatarProfile, setAvatarProfile] = useState('');
  const updateAvatarProfile = (avatarProfile) => {
    setAvatarProfile(avatarProfile);
  };

  return (
    <div className="container">
      <Header/>
      <div className='div__MQ'>
      <main className="main">
        <CardPreview updateAvatar={updateAvatar} avatar={avatar} data={data} updateAvatarProfile={updateAvatarProfile} avatarProfile={avatarProfile}/>
        <Form updateAvatarProfile={updateAvatarProfile} avatarProfile={avatarProfile} updateAvatar={updateAvatar} avatar={avatar} data={data} updateInput={updateInput} updateCard={updateCard} error={error}/>
      </main>
      </div>
    
    
    </div>
  );
}

export default App;
