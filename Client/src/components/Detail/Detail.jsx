import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styledDetail from './Detail.module.css'

// const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
// const API_KEY = 'henrym-hx-gcamey';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={styledDetail.card}>
            <h1>{character?.name}</h1>
            <h2>STATUS | {character?.status}</h2>
            <h2>SPECIE | {character?.species}</h2>
            <h2>GENDER | {character?.gender}</h2>
            <h2>ORIGIN | {character?.origin?.name}</h2>
            <img className= {styledDetail.cardImage} src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;