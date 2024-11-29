import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonData() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [pokemonStats, setPokemonStats] = useState("");
    const [pokemonType, setPokemonType] = useState("");

    const fetchPokemonData = async () => {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        );

        const data = await res.json();
        setPokemonImage(data.sprites.front_default);
        setPokemonStats(data.stats);
        setPokemonType(data.types);

        console.log(pokemonStats);
    };

    const handleSubmit = () => {
        fetchPokemonData();
    };

    useEffect(() => {
        fetchPokemonData();
    }, []);

    return (
        <>
            <div className="poke-data-container">
                <div className="input-container">
                    <input
                        type="text"
                        value={pokemon}
                        onChange={(e) => setPokemon(e.target.value)}
                        placeholder="Search for a Pokemon"
                    />
                    <button onClick={handleSubmit}>Search Pokemon</button>
                </div>

                {pokemonImage && (
                    <div className="stat-info">
                        <div className="type-container">
                            <h2>
                                Type:{" "}
                                {pokemonType[0].type.name
                                    .charAt(0)
                                    .toUpperCase() +
                                    pokemonType[0].type.name.slice(1)}
                            </h2>
                        </div>
                        <div className="stats-wrapper">
                            <h2>
                                {pokemon.charAt(0).toUpperCase() +
                                    pokemon.slice(1)}
                            </h2>
                            <img src={pokemonImage} alt={pokemon} />
                            <div className="stats-container">
                                <h2>Stats: </h2>
                                <ul>
                                    {pokemonStats.map((stat, index) => (
                                        <li key={index}>
                                            <span className="stat-name">
                                                {stat.stat.name.toUpperCase()}:
                                            </span>{" "}
                                            {stat.base_stat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default PokemonData;
