import '../styles/App.scss';
import { useState } from 'react';
import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

function App() {
  const [nameProject, setNameProject] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [desc, setDesc] = useState('');
  const [nameAuthor, setNameAuthor] = useState('');
  const [job, setJob] = useState('');

  const handleInput = (event) => {
    const inputId = event.target.id;
    console.log(event.target.value);
    if (inputId === 'nameProject') {
      setNameProject(event.target.value);
    } else if (inputId === 'slogan') {
      setSlogan(event.target.value);
    } else if (inputId === 'repo') {
      setRepo(event.target.value);
    } else if (inputId === 'demo') {
      setDemo(event.target.value);
    } else if (inputId === 'technologies') {
      setTechnologies(event.target.value);
    } else if (inputId === 'desc') {
      setDesc(event.target.value);
    } else if (inputId === 'nameAuthor') {
      setNameAuthor(event.target.value);
    } else if (inputId === 'job') {
      setJob(event.target.value);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">{nameProject || 'Elegant Workspace'}</h2>
              <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {desc ||
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum'}
              </p>
              <section className="technologies">
                <p className="text">{technologies || 'React JS, MongoDB'}</p>
                <div>
                <a href={'https://www.'+repo} target='_blank' rel='noopener noreferrer'>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={'https://www.'+demo} target='_blank' rel='noopener noreferrer'>
                    <i className="fa-solid fa-globe"></i>
                </a>
                </div>
              </section> 
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="name">{nameAuthor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

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
              id="nameProject"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onChange={handleInput}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onChange={handleInput}
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="nameAuthor"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onChange={handleInput}
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large">Crear Tarjeta</button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
