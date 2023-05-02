import React from 'react'

export default function PokemonType({ type }) {

    let color = {};




    switch (type.toLowerCase()) {
        case "grass":
            color = { backgroundColor: "#07AD07" };
            break;
        case "fire":
            color = { backgroundColor: "#F08030" };
            break;
        case "water":
            color = { backgroundColor: "#6890F0" };
            break;
        case "electric":
            color = { backgroundColor: "#F8D030" };
            break;
        case "ice":
            color = { backgroundColor: "#98D8D8" };
            break;
        case "fighting":
            color = { backgroundColor: "#C03028" };
            break;
        case "poison":
            color = { backgroundColor: "#A040A0" };
            break;
        case "ground":
            color = { backgroundColor: "#F8D030" };
            break;
        case "flying":
            color = { backgroundColor: "#A890F0" };
            break;
        case "psychic":
            color = { backgroundColor: "#F85888" };
            break;
        case "bug":
            color = { backgroundColor: "#A8B820" };
            break;
        case "rock":
            color = { backgroundColor: "#B8A038" };
            break;
        case "ghost":
            color = { backgroundColor: "#705898" };
            break;
        case "dragon":
            color = { backgroundColor: "#7038F8" };
            break;
        case "dark":
            color = { backgroundColor: "#705848" };
            break;
        case "steel":
            color = { backgroundColor: "#B8B8D0" };
            break;
        case "fairy":
            color = { backgroundColor: "#EE99AC" };
            break;
        case "normal":
            color = { backgroundColor: "#A8A878" };
            break;
        default:
            break;
    }
    console.log("color", color);

    const style = {
        color: "#FFFFFF",
        fontSize: "0.5rem", // set the font size to be smaller
        borderRadius: "5px",
        padding: "0.2rem",
        marginRight: "0.1rem",
        backgroundColor: color.backgroundColor,
    };

    return (
        <span className="rounded text-white border p-1" style={style}>
            {type}
        </span>
    )
}
