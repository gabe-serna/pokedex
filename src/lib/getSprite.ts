const getSprite = (id: number): string => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return url;
};

export default getSprite;
