var express = require('express')
var bodyParser = require('body-parser')
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { data } = require('./api/data')
var { makeExecutableSchema } = require('graphql-tools')

var typeDefs = [
  `
  type Person {
    id: ID!
    name: String!
    birthday: String
    placeOfBirth: String
    bio: String
    filmography: [Movie]
  }
  type Movie {
    id: ID!
    title: String!
    releaseDate: String
    stars: [Person]
    director: Person
  }
  type Query {
    people: [Person]
    person(id: ID!): Person
    movies: [Movie]
    movie(id: ID!): Movie
  }

schema {
  query: Query
}`
]

var resolvers = {
  Query: {
    movies() {
      return data.movies
    },
    movie(root, { id }) {
      return data.movies.find(movie => movie.id === parseInt(id))
    },
    people() {
      return data.people
    }
  },
  Movie: {
    director(movie) {
      if (!movie.director) return null
      return data.people.find(person => person.id === movie.director)
    },
    stars(movie) {
      return data.people.filter(person =>
        person.filmography.find(
          credit => credit === movie.id && person.id !== movie.director
        )
      )
    }
  }
}

var schema = makeExecutableSchema({ typeDefs, resolvers })
var app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))
