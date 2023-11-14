import '../styles/App.scss';
<<<<<<< HEAD
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';
function App() {
  return (
    <div className='container'>
      <header className='header'>
        <p className='text'>Proyectos Molones</p>
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={cover} alt='' />

          <section className='autor'>
            <section className='info-project'>
              <p className='subtitle'>Personal Project Card</p>
              <hr className='line' />

              <h2 className='title'>Elegant Workspace</h2>
              <p className='slogan'>Diseños Exclusivos</p>
              <p className='desc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <section className='technologies'>
                <p className='text'>React JS, MongoDB</p>
              </section>
            </section>

            <section className='info-autor'>
              <img className='image' src={user} alt='' />
              <p className='job'>Full Stack Developer</p>
              <p className='name'>Emmelie Björklund</p>
            </section>
          </section>
        </section>

        <section className='form'>
          <h2 className='title'>Información</h2>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='line' />
          </section>

          <fieldset className='project'>
            <input
              className='input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
            />
            <input
              className='input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
            />
            <input
              className='input'
              type='text'
              name='repo'
              id='repo'
              placeholder='Repo'
            />
            <input
              className='input'
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
            />
            <input
              className='input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
            />
            <textarea
              className='textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
            ></textarea>
          </fieldset>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line' />
          </section>

          <fieldset className='autor'>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
            />
            <input
              className='input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
            />
          </fieldset>

          <section className='buttons-img'>
            <button className='btn'>Subir foto de proyecto</button>
            <button className='btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button className='btn-large' onClick='{handleClickCreateCard}'>
              Crear Tarjeta
            </button>
          </section>

          <section className='card'>
            <span className=''> La tarjeta ha sido creada: </span>
            <a href='' className='' target='_blank' rel='noreferrer'>
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
=======
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import localStorage from '../services/localStorage';
import CreatePage from './Create-Page/CreatePage';
import { useLocation, matchPath } from 'react-router';
import logo from '../images/solo-logo.png';
import { Link } from 'react-router-dom';


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
          path='/'
          element={
            <>
              <header className='header'>
                <img src={logo} alt='logo' className='header__logo' />
                <p className='header__text'>Proyectos Molones</p>
              </header>
              <div className='landing'>
                <img className='landing__logo' src={logo} alt='logo' />
                <h1 className='landing__title'>Proyectos Molones</h1>
                <h2 className='landing__subtitle'>
                  ¿Quieres publicar tu proyecto con nosotras?
                </h2>
                <p className='landing__p'>¡Has llegado a la web correcta!</p>
                <Link to='/CreatePage'>
                  <button className='btn-Start'>Comienza Ahora</button>
                </Link>
              </div>
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
    </>
>>>>>>> 84d8e0b330430488b98b44ed329c40e0e01e6aa6
  );
}

export default App;
