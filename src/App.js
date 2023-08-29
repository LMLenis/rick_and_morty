import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import ErrorPage from './components/ErrorPage';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY = 'henrym-hx-gcamey'

const EMAIL = 'llenis73@gmail.com';
const PASSWORD = '123456';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(()=> {!access && navigate('/');}, [access]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) =>
         character.id !== Number(id))
      setCharacters(charactersFiltered)
   }
   const randomHandler = () => {
      let randomId = (Math.random()*826).toFixed()
      randomId = Number(randomId);
      onSearch(randomId);
   }

   const logout = () => {
      navigate('/');
   }

   return (
      <div className='App'>
         {
            location.pathname !=='/'&& <Nav onSearch= {onSearch} randomize= {randomHandler} logout={logout}/>
         }
         
         <Routes>
            <Route path='/' element = {<Form login={login}/>} />
            <Route path = '/home' element = { <Cards characters=
            {characters} onClose = {onClose} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
