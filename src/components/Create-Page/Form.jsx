
const Form = () => {


    return (<section className="form">
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
  </section>);
};
export default Form;