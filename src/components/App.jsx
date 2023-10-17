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
  const updateInput = (data) => {
    setData(data);
  };
  
  const updateCard = (error) => {
    setError(error);
  };
  

  return (
    <div className="container">
      <Header/>
      <div className='div__MQ'>
      <main className="main">
        <CardPreview data={data}/>
        <Form data={data} updateInput={updateInput} updateCard={updateCard} error={error}/>
      </main>
      </div>
    </div>
  );
}

export default App;
