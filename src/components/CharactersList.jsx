import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { CharacterCard } from './CharacterCard.jsx';


export const CharactersList = () => {

    //state sur characters pour pouvoir le modifier // infos et currentpage pour setter 
    //les autres pages 

    const [characters, setCharacters] = useState([]);
    const [infos, setInfos] = useState([]);
    const [charactersAlive, setCharactersAlive] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    //utiliser useEffet pour appeler la fonction

    useEffect(() => {
        getDataFromApi(currentPage)
    }, []);

    //montage de l'appel api consolelog de la reponse pour afficher les éléments qui 
    //peuvent être affichés 
    //infos et currentpage pour accèder aux différentes pages 

    const getDataFromApi = (numberPage) => {
        axios
        .get(`https://rickandmortyapi.com/api/character/?page=${numberPage}`)
        .then(response => {
            setCharacters(response.data.results)
            setInfos(response.data.info)
            setCurrentPage(numberPage)
            console.log(response.data.info)
        })

    }

    //verification de la récupération 
    
    console.log(characters);
    console.log(infos);

    //création du filtercharacters pour la fonction au click
    const filterCharacters = () => {
        if (charactersAlive === false){
            setCharactersAlive(true)
            setCharacters(characters.filter(character => character.status === 'Alive'))
        } else{
            setCharactersAlive(false)
            getDataFromApi()
        }
        
    }


    return (
        <div className="">
            <h1>Characters List</h1>
            <div>
                <p>Total result : {infos && infos.count}</p>
                <p>{currentPage} / { infos.pages}  </p>
            </div>
            <div>
                <button type="button" onClick={() => filterCharacters()}>{charactersAlive ? 'Get Alive Characters' : 'Get All Characters'}</button>
            </div>
            <div>
                <button type="button" onClick={() => infos.prev != null && getDataFromApi(currentPage -1)}>PREV</button>
                <button type="button" onClick={() => infos.next != null && getDataFromApi(currentPage +1)}>NEXT</button>
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
