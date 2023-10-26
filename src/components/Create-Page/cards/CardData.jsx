import defaultAvatar from '../../../images/detectivenegro.jpg';


const CardData = ({ data, avatarProfile }) => {
  const profileAvatar = avatarProfile === '' ? defaultAvatar : avatarProfile;
  console.log(avatarProfile);
  return (
    <section className='preview__card landing_card'>
      <section className='preview__card--project'>
        <p className='subtitle'>Personal Project Card</p>
        <hr className='line' />

        <h2 className='title'>{data.name || 'Elegant Workspace'}</h2>
        <p className='slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
        <p className='desc'>
          {data.desc ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam.'}
        </p>
        <section className='technologies'>
          <p className='text'>{data.technologies || 'React JS, MongoDB'}</p>
          <div className='icons'>
            <a href={data.repo} target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href={data.demo} target='_blank' rel='noopener noreferrer'>
              <i className='fa-solid fa-globe'></i>
            </a>
          </div>
        </section>
      </section>

      <section className='preview__card--autor'>
        <div
          className='imageProfile'
          style={{ backgroundImage: `url(${profileAvatar})` }}
        ></div>
        <p className='job'>{data.job || 'Full Stack Developer'}</p>
        <p className='name'>{data.autor || 'Emmelie Björklund'}</p>
      </section>
    </section>
  );
};
export default CardData;
