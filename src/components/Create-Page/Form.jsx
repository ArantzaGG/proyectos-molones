import React from 'react';
import callToApi from '../../services/fetch';
import {useState} from 'react'
import GetAvatar from '../Create-Page/GetAvatar';

const Form = ({ data, updateInput, updateCard, error, avatar, updateAvatar, updateAvatarProfile, avatarProfile }) => {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  const [linkUrl, setLinkUrl] = useState('');
  const [hidden, setHidden] = useState(true);
  const handleCard = () => {
    if (data.name === '') {
      updateCard('El campo del nombre del proyecto es obligatorio');
    } else if (data.slogan === '') {
      updateCard('El campo slogan es obligatorio');
    } else if (data.repo !== '' && !regex.test(data.repo)) {
      updateCard('La URL del campo repo no es válida');
    } else if (data.repo === '') {
      updateCard('El campo repo es obligatorio');
    } else if (data.demo !== '' && !regex.test(data.demo)) {
      updateCard('La URL del campo demo no es válida');
    } else if (data.demo === '') {
      updateCard('El campo demo es obligatorio');
    } else if (data.technologies === '') {
      updateCard('El campo de las tecnologías es obligatorio');
    } else if (data.desc === '') {
      updateCard('El campo de la descripción es obligatorio');
    } else if (data.autor === '') {
      updateCard('El campo del autor es obligatorio');
    } else if (data.job === '') {
      updateCard('El campo del trabajo es obligatorio');
    } else {
      updateCard('');
    }
    callToApi(data).then((response) => {
      setLinkUrl(response);
      setHidden(false);
    });
  };

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    updateInput({ ...data, [id]: value });
  };

 
  return (
    <section className="form">
      <h2 className="title">Información</h2>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="line" />
      </section>

      <fieldset className="project">
        <input
          className="input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          onChange={handleInput}
          value={data.name}
          required
        />
        <input
          className="input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleInput}
          value={data.slogan}
          required
        />
        <input
          className="input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repo"
          onChange={handleInput}
          value={data.repo}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          onChange={handleInput}
          value={data.demo}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          onChange={handleInput}
          value={data.technologies}
          required
        />
        <textarea
          className="textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          onChange={handleInput}
          value={data.desc}
          required
        ></textarea>
      </fieldset>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre la autora</p>
        <hr className="line" />
      </section>

      <fieldset className="autor__fielset">
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          onChange={handleInput}
          value={data.autor}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          onChange={handleInput}
          value={data.job}
          required
        />
      </fieldset>

      <section className="buttons-img">
      <button className='btn'><GetAvatar avatar={avatar} update={updateAvatar} text= "Subir imagen del proyecto" /></button>
        <button className="btn"><GetAvatar update={updateAvatarProfile} avatarProfile={avatarProfile} text= "Subir tu foto personal"/></button>
      </section>
      <section className="buttons-img">
        <button onClick={handleCard} className="btn-large">
          Crear Tarjeta
        </button>
        <p>{error}</p>
      </section>

      <section className={`card ${hidden ? 'hidden' : ''}`}>
        <span className=""> La tarjeta ha sido creada: </span>
        <a href={linkUrl} className="" target="_blank" rel="noreferrer">
          {linkUrl}
        </a>
      </section>
    </section>
  );
};
export default Form;
