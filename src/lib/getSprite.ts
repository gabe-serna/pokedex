// import notFound from '../assets/not_found.png';

const getSprite = (id: number): string => {
  // if (id > 1025) return notFound;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return url;
};

export default getSprite;
