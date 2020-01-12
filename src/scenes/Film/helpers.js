import { films as bioFilms } from 'Biography/data'
import { films as nowFilms } from 'Now/data'

export const getFilm = key => {
  const films = [...bioFilms, ...nowFilms]

  return films.find(film => film.key === key)
}
