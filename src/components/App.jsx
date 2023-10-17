import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header/Header';
import Form from './Create-Page/Form';
import CardPreview from './Create-Page/cards/CardPreview';

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
        <CardPreview/>
        <Form/>
      </main>
      </div>
    </div>
  );
}

export default App;
