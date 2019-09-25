import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/HomeComponent/home';
import Contact from './components/HomeComponent/contact';
import About from './components/HomeComponent/about';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a class="navbar-brand" href="/"> Sample Title </a>
          <ul className="navbar-nav">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
     );
  }
}
 
export default App;
