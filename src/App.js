import React, { useContext } from "react";
import "./App.css";
import {
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid";
import { useTransition, animated } from "react-spring";

const App = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  const { location } = useContext(__RouterContext);

  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0,transform:"translate(100%,0)"},
    enter: { opacity: 1,transform:"translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-100%,0)" }
  });
  return (   
      <div className="App">
        <div className="container">
          <br />
          <Grid container spacing={2}>
            <Grid item md={5} className='logo'>
              <h2 id="brand">Quancoder</h2>
              <img src='https://i.imgur.com/k23lVzL.png' width='200px' alt='logo'/>
            </Grid>

            <Grid item md={7} className='nav'>
              <nav>
                <ul>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                  >
                    <Link to="/" className="aButton">
                      Home
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonIcon />}
                  >
                    <Link to="/about" className="aButton">
                      About
                    </Link>
                  </Button>
                </ul>
              </nav>
            </Grid>
          </Grid>
          
        </div>
        {transition.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </animated.div>
        ))}
      
  
      </div>
    
  );
}

export default App;
