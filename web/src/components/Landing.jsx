import CardData from '../components/Create-Page/cards/CardData';
import Header from './Header/Header';
import '../styles/Landing.scss';
import '../styles/CardPreview.scss';
import SubHeader from './Header/SubHeader';
import PropTypes from 'prop-types';
import api from '../services/fetch';
import { useState, useEffect } from 'react';

function Landing() {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDataProjects();
      setListProject(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <div className='landing'>
        <section className='landing__section1'>
          <SubHeader
            title={'Proyectos Molones'}
            subTitle={'¿Te gustaría darte a conocer?'}
            desc={
              'Si estás buscando un lugar donde publicar tus proyectos para que el mundo conozca tu increible potencial y tus grandes capacidades, has llegado al sitio correcto.'
            }
            textButton={'Comienza ahora'}
            btnLink={'/CreatePage'}
          />
        </section>
        <section className='landing_section2'>
          {listProject.map((project, index) => {
            return (
              <a
                href={`http://localhost:3000/newCard/${project.idprojects}`}
                key={index}
              >
                <CardData key={index} data={project} className='landing_card' />
              </a>
            );
          })}
        </section>
      </div>
    </>
  );
}

Landing.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default Landing;
