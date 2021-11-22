import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { CharacterCard } from './CharacterCard.jsx';

export const CharactersList = () => {

    //state sur characters pour pouvoir le modifier

    const [characters, setCharacters] = useState([]);
    const [charactersAlive, setCharactersAlive] = useState(false);

    //utiliser useEffet pour appeler la fonction

    useEffect(() => {
        getCharactersFromApi()
    }, []);

    //montage de l'appel api 

    const getCharactersFromApi = () => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => setCharacters(response.data.results))
    }

    //verification de la récupération 
    
    console.log(characters);

    //création du filtercharacters pour la fonction au click
    const filterCharacters = () => {
        if (charactersAlive === false){
            setCharactersAlive(true)
            setCharacters(characters.filter(character => character.status === 'Alive'))
        } else{
            setCharactersAlive(false)
            getCharactersFromApi()
        }
        
    }


    return (
        <div className="">
            <h1>Characters List</h1>
            <div>
                <button type="button" onClick={() => filterCharacters()}>{charactersAlive ? 'Get All Characters' : 'Get Alive Characters'}</button>
            </div>
            <div>
                {
                    characters ? 
                    characters.map(character => <CharacterCard key={character.id} character={character} />)
                    : 'Loading ...'
                }
            </div>
        </div>
    )
}
