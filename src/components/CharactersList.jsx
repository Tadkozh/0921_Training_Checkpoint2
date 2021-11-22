import { useEffect, useState } from 'react';
import axios from 'axios';
import { CharacterCard } from './CharacterCard';

export const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [charactersAlive, setCharactersAlive] = useState(false);
    

    useEffect(() => {
        getCharatersFromApi()
    }, []);

    const getCharatersFromApi = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            setCharacters(response.data.results)
            console.log(response.data)
        }
    }

    const filterCharacters = () => {
        if (charactersAlive === false){
            setCharactersAlive(true)
            setCharacters(characters.filter(character => character.status === "Alive"))
        }else{
            setCharactersAlive(false)
            getCharatersFromApi()
        }
    }

    console.log(characters);
    return(
        <div>
            <h1>Characters List</h1>
            <div>
                <button type ="button" onClick={() => filterCharacters()}>{charactersAlive ?'Get All Characters' : 'Get Alive Characters'}</button>
            </div>
            <div>
                {
                    characters ? 
                    characters.map(character => <CharacterCard key={character.id} character={character} />) 
                    : 'Loading...'
                }
            </div>
        </div>
    )
}