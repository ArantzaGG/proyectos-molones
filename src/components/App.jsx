import '../styles/App.scss';
import { useState } from 'react';
import cover from '../images/periodico.jpg';
import user from '../images/detectivenegro.jpg';
import Header from './Header/Header';

function App() {
  const [error, setError] = useState('');

  const [data, setData] = useState({
    nameProject: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    nameAuthor: '',
    job: '',
  });
  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    setData({ ...data, [id]: value });
  };

  const handleCard = () => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (data.nameProject === '') {
      setError('El campo del nombre del proyecto es obligatorio');
    } else if (data.slogan === '') {
      setError('El campo slogan es obligatorio');
    } else if (data.repo !== '' && !regex.test(data.repo)) {
      setError('La URl del campo repo no es válida');
    } else if (data.repo === '') {
      setError('El campo repo es obligatorio');
    } else if (data.demo !== '' && !regex.test(data.demo)) {
      setError('La URl del campo demo no es válida');
    } else if (data.demo === '') {
      setError('El campo demo es obligatorio');
    } else if (data.technologies === '') {
      setError('El campo de las tecnologias es obligatorio');
    } else if (data.desc === '') {
      setError('El campo de la descripcion es obligatorio');
    } else if (data.nameAuthor === '') {
      setError('El campo del autor es obligatorio');
    } else if (data.job === '') {
      setError('El campo del trabajo es obligatorio');
    } else {
      setError('');
    }
  };

  return (
    <div className="container">
      <Header/>
      <div className='div__MQ'>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />
          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">
                {data.nameProject || 'Elegant Workspace'}
              </h2>
              <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {data.desc ||
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam.'}
              </p>
              <section className="technologies">
                <p className="text">
                  {data.technologies || 'React JS, MongoDB'}
                </p>
                <div className='icons'>
                  <a href={data.repo} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={data.demo} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{data.job || 'Full Stack Developer'}</p>
              <p className="name">{data.nameAuthor || 'Emmelie Björklund'}</p>
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
              value={data.nameProject}
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
              id="nameAuthor"
              onChange={handleInput}
              value={data.nameAuthor}
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
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button onClick={handleCard} className="btn-large">
              Crear Tarjeta
            </button>
            <p>{error}</p>
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
    </div>
  );
}

export default App;
