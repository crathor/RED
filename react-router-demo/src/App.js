import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

const Home = props => {
  return <h1>{`Home ${props.match.path}`}</h1>
}
const Nav = props => {
  const active = {
    display: 'none'
  }
  const styles = {
    header: {
      background: 'skyblue',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '1px 1px 3px #000'
    },
    navLink: {
      padding: '12px',
      textDecoration: 'none',
      color: '#fff',
      fontSize: 30
    }
  }
  return (
    <header style={styles.header}>
      <NavLink exact to="/" activeStyle={active} style={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={active} style={styles.navLink}>
        About
      </NavLink>
      <NavLink to="/contact" activeStyle={active} style={styles.navLink}>
        Contact
      </NavLink>
      <NavLink to="/profile/123" activeStyle={active} style={styles.navLink}>
        Profile
      </NavLink>
    </header>
  )
}
const About = props => <h1>{`About ${props.match.path}`}</h1>
const Contact = props => <h1>{`Contact ${props.match.path}`}</h1>
const Profile = props => (
  <React.Fragment>
    <h1>{`Profile ${props.match.path}`}</h1>
    <p>{`Param: ${props.match.params.id}`}</p>
  </React.Fragment>
)
const NotFound = () => <Redirect to="/" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/profile/:id" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
