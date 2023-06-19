import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Main = () => {
  return (
    <div className="main">
      <h1 className="name">Akshay Sripriya</h1>
      <ChangingTextAnimation />
    </div>
  );
};

class ChangingTextAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      texts: [
        "Welcome to my portfolio !",
        "Check out my projects.",
        "Read my latest blog posts.",
        "Contact me for collaborations.",
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % prevState.texts.length,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentIndex, texts } = this.state;
    return (
      <div className="changing-text">
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={500} classNames="fade">
            <div className="text">{texts[currentIndex]}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const About = () => <h2>About Page</h2>;
const Resume = () => <h2>Resume Page</h2>;
const Portfolio = () => <h2>Portfolio Page</h2>;
const Blog = () => <h2>Blog Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
