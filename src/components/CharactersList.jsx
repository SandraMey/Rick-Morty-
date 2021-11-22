import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { CharactersCard } from './CharactersCard.jsx';

export const CharactersList = () => {

    //state sur characters pour pouvoir le modifier

    const [characters, setCharacters] = useState([]);

    //utiliser useEffet pour monter l'appel API

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => setCharacters(response.data.results))
    }, []);

    //verification de la récupération 
    
    console.log(characters);


    return (
        <div className="">
            <h1>Characters List</h1>
            <div>
                {
                    characters ? 
                    characters.map(character => <CharactersCard key={character.id} character={character} />)
                    : 'Loading ...'
                }
            </div>
        </div>
    )
}
