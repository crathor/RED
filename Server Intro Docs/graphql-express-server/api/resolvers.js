const { data } = require('./data')
const {
  getMovies,
  getMovie,
  getPeople,
  newPerson,
  getDirector,
  getStars,
  getFilmography
} = require('./helpers')

const resolvers = {
  Query: {
    movies() {
      return getMovies()
    },
    movie(root, { id }) {
      return getMovie(root, id)
    },
    people() {
      return getPeople()
    },
    person(root, { id }) {
      return getPerson(root, id)
    }
  },
  Mutation: {
    addPerson(root, args) {
      return newPerson(args)
    }
  },
  Movie: {
    director(movie) {
      return getDirector(movie)
    },
    stars(movie) {
      return getStars(movie)
    }
  },
  Person: {
    filmography(person) {
      return getFilmography(person)
    }
  }
}
// Resolvers go here...
module.exports = resolvers
