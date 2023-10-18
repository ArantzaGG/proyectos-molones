import user from '../../images/detectivenegro.jpg';

const CardData = () => {
    return (
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
    );
};
export default CardData;