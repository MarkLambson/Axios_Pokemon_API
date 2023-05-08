import React, { useState } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    const [pokemonName, setPokemonName] = useState([])

    const fetchData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
        .then((response) => {
            console.log(response.data.results)
            setPokemonName(response.data.results)
        })
        .catch((error) => {
            console.log("This is our catch all ERROR message", error)
        })
    }

    return (
        <div>
            <button onClick={fetchData} className='btn btn-outline-secondary'>Fetch Pokemon</button>
            <hr />
            {
                pokemonName.map((pokemon, idx) => {
                    return (
                        <div key={idx} className='list'>
                            <ul>
                            <li>{pokemon.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosAPI