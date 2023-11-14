import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/fetch';
import CardData from '../components/Create-Page/cards/CardData';
import Header from './Header/Header';
import SubHeader from './Header/SubHeader';
import '../styles/Landing.scss';

function Landing() {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getDataProjects();
        setListProject(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteProject = async (projectId) => {
    try {
      const deleteResult = await api.deleteProject(projectId);
      console.log('Delete Result:', deleteResult);

      const updatedList = await api.getDataProjects();

      setListProject(updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className='landing'>
        <section className='landing__section1'>
          <SubHeader
            title={'Proyectos Molones'}
            subTitle={'¿Te gustaría darte a conocer?'}
            desc={
              'Si estás buscando un lugar donde publicar tus proyectos para que el mundo conozca tu increíble potencial y tus grandes capacidades, has llegado al sitio correcto.'
            }
            textButton={'Comienza ahora'}
            btnLink={'/CreatePage'}
          />
        </section>
        <section className='landing_section2'>
          {listProject.map((project) => (
            <div key={project.idprojects} className='landing_card_container'>
              <button
                className='button'
                onClick={() => handleDeleteProject(project.idprojects)}
              >
                <i className="fa-solid fa-trash fa-beat-fade fa-lg"></i>
              </button>
              <a href={`http://localhost:3000/newCard/${project.idprojects}`}>
                <CardData
                  key={project.idprojects}
                  data={project}
                  className='landing_card'
                />
              </a>
            </div>
          ))}
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
