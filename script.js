const pokemonContainer = document.getElementById('pokemon-container');

const fetchPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon-card');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const type = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    const pokemonInnerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p>ID: ${id}</p>
        <p>Type: ${type}</p>
    `;

    pokemonElement.innerHTML = pokemonInnerHTML;
    pokemonContainer.appendChild(pokemonElement);
};

const fetchPokemons = async (number) => {
    for (let i = 1; i <= number; i++) {
        await fetchPokemon(i);
    }
};

fetchPokemons(151); // Cambia el número para obtener más o menos Pokémon
