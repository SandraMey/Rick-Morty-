import React from 'react'
import { Link } from "react-router-dom";


export const CharacterCard = ({ character }) => {

    //récupération en props de character pour le render


    return (
        <div>
            
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}/>
            <p>{character.status}</p>
            <Link to={`/character/${character.id}`}>Go character</Link>
        </div>
    )
}
