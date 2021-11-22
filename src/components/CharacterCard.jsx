import React from 'react'
import { CharactersList } from './CharactersList';


export const CharacterCard = ({ character }) => {

    //récupération en props de character pour le render


    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}/>
            <p>{character.status}</p>
        </div>
    )
}
