import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';

function App() {
  const isAuthenticated = useTwitchAuthentication();
  const [data,setData] =useState([])
  const [Cat, setCate] = useState([])

  if (!isAuthenticated) {
    return null;
  }

  function getTop(data){
    setData(data)
  }
 
  function getCat(datCat){
    setCate(datCat);
  }

  return (
    <div className="App">
      <Navbar setCat={getCat} setTopGames ={getTop}/>
      <Content passacat={Cat} passadati={data}/>
    </div>
  );
}

export default App;