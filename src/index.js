import fetch from "node-fetch";

async function searchPokemon(name) {
  //Empieza la API
  const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(`
    Nombre: ${data.forms[0].name}
    ID: ${data.id}
    Tipo: ${data.types.map((tipo) => tipo.type.name).join(", ")}
    ${data.stats[0].stat.name}: ${data.stats[0].base_stat}
    ${data.stats[1].stat.name}: ${data.stats[1].base_stat}
    ${data.stats[2].stat.name}: ${data.stats[2].base_stat}
    ${data.stats[3].stat.name}: ${data.stats[3].base_stat}
    ${data.stats[4].stat.name}: ${data.stats[4].base_stat}
    ${data.stats[5].stat.name}: ${data.stats[5].base_stat}
    Altura: ${data.height}
    Peso: ${data.weight}
    Habilidades: ${data.abilities.map((tipo) => tipo.ability.name).join(", ")}
    Movimientos: ${data.moves
      .map((movimiento) => movimiento.move.name)
      .slice(0, 3)
      .join(", ")}
    Movimientos+: ${data.moves
      .map((movimiento) => movimiento.move.name)
      .slice(4, 7)
      .join(", ")}
    Movimientos++: ${data.moves
      .map((movimiento) => movimiento.move.name)
      .slice(8, 11)
      .join(", ")}
    `);
  } catch (error) {
    console.error(error);
  }
}

export default searchPokemon;
