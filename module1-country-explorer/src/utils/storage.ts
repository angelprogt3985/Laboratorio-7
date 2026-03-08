const favoritos = "favoriteCountries";

const obtenerFav = (): Set<string> =>
  new Set(JSON.parse(localStorage.getItem(favoritos) ?? "[]"));

const guardar = (favorites: Set<string>): void =>
  localStorage.setItem(favoritos, JSON.stringify(Array.from(favorites)));

export const toggleFavorite = (code: string): void => {
  const favorites = obtenerFav();
  favorites.has(code) ? favorites.delete(code) : favorites.add(code);
  guardar(favorites);
};

export const isFavorite = (code: string): boolean =>
  obtenerFav().has(code);

export const getFavoriteList = (): string[] => Array.from(obtenerFav());