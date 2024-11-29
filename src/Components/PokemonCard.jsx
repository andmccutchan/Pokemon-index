import React from "react";

function PokemonCard({ user }) {
    const { sprites } = user;

    return (
        <div className="pokemon-container">
            <img src="{sprites.front_default}" alt="Pokemon" />
        </div>
    );
}

export default PokemonCard;
