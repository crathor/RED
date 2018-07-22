const { data } = require('./data')

const getMovies = () => {
  return data.movies
}
const getMovie = id => {
  return data.movies.find(movie => movie.id === parseInt(id))
}
const getPeople = () => {
  return data.people
}
const getPerson = id => {
  return data.people.find(person => person.id === parseInt(id))
}
const newPerson = args => {
  const newPerson = {
    id: data.people.length + 1,
    ...args.person
  }
  data.people.push(newPerson)
  return newPerson
}
const getDirector = movie => {
  if (!movie.director) return null
  return data.people.find(person => person.id === movie.director)
}
const getStars = movie => {
  return data.people.filter(person =>
    person.filmography.find(
      credit => credit === movie.id && person.id !== movie.director
    )
  )
}
const getFilmography = person => {
  return data.movies.filter(movie => person.filmography.includes(movie.id))
  // return data.movies.filter(movie => {
  //   if (person.id === movie.director) {
  //     return movie
  //   } else {
  //     return movie.stars.find(id => id === person.id)
  //   }
  // })
}

module.exports = {
  getMovies,
  getMovie,
  getPeople,
  getPerson,
  newPerson,
  getDirector,
  getStars,
  getFilmography
}
