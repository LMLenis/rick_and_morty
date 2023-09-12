import { useState } from 'react';
import styledSearch from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)

   }

   return (
      <div className={styledSearch.divContent}>
         <input type='search' onChange={handleChange} value ={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
