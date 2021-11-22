import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {

    //useparams recupere les params passés dans l'url
    const { id } = useParams();
    console.log(id);
    const [character, setCharacter] = useState({});

    useEffect(() => {
        getCharacters()
    }, []);

    const getCharacters = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => setCharacter(response.data))
    }

    return(
        <div>Character Details
            {
                character && 
                <h1>{character.name}</h1>

            }
        </div>
    )
}