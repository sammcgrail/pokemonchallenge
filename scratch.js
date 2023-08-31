// Evolv Senior Frontend Developer - Technical Interview - Code Challenge

// Goal:
// - Fetch the first 10 pokemon from the Pokemon API
// - Sort the pokemon by height
// - Render the pokemon names in a list with a 'fun' style

// API Docs: https://pokeapi.co/

import fetch from "node-fetch";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

const program = async () => {
  const response = await fetch(POKEMON_API_URL);
  const body = await response.json();
  const limitedBody = body.results.slice(0, 10);

  // console.log(body);
  console.log("limited ten", limitedBody);
  const uniquePokemonUrls = limitedBody.map((pokemon) => pokemon.url);
  console.log(uniquePokemonUrls);

  const heightResponse = await fetch(uniquePokemonUrls[0]);
  const heightBody = await heightResponse.json();
  console.log(heightBody.height);
};

void program();
