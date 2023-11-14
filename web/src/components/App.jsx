import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import localStorage from '../services/localStorage';
import CreatePage from './Create-Page/CreatePage';
import { useLocation, matchPath } from 'react-router';
import Landing from './Landing';

function App() {
  const [error, setError] = useState('');

  const [data, setData] = useState(
    localStorage.get('storagedData', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    })
  );
  const updateInput = (data) => {
    setData(data);
  };

  const updateCard = (error) => {
    setError(error);
  };

  
  const updateAvatar = (avatar) => {
  setData({...data, photo: avatar})
    
  };

  useEffect(()=>{
    localStorage.set("storagedData", data);
  },[data]) 

  const updateAvatarProfile = (avatarProfile) => {
    setData({...data, image: avatarProfile})
    
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/CreatePage', pathname);
  console.log(routeData);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              
              
              data={data}
            />
          }
        />
        <Route
          path="/CreatePage"
          element={
            <CreatePage
              updateAvatarProfile={updateAvatarProfile}            
              updateAvatar={updateAvatar}
              data={data}
              updateInput={updateInput}
              updateCard={updateCard}
              error={error}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
