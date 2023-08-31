import fetch from "node-fetch";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const program = async () => {
  const response = await fetch(`${POKEMON_API_URL}?limit=10`);
  const body = await response.json();

  const pokemonPromises = body.results.map((pokemon) =>
    fetchPokemonDetails(pokemon.url)
  );
  const pokemonDetails = await Promise.all(pokemonPromises);

  // Sort Pokemon by height
  const sortedPokemon = pokemonDetails.sort((a, b) => a.height - b.height);

  // Render the Pokemon names in a list with a 'fun' style
  console.log("Pokemon Sorted by Height:");
  for (let pokemon of sortedPokemon) {
    console.log(
      `✨ ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      } ✨ (Height: ${pokemon.height} decimetres)`
    );
  }
};

void program();
