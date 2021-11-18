import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import { routes } from "../routes";
import { RootState } from "../store";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import defaultTheme from "../themes";
import { loadUser } from "../features/user";

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const App = () => {
  const { loggedIn, loadingLocalUser } = useSelector(
    (state: RootState) => state.user
  );

  const [showSignup, setShowSignup] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (loadingLocalUser) {
    return <></>;
  }

  if (showSignup) {
    return <SignUp setShowSignup={setShowSignup} />;
  }

  if (!loggedIn) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Login setShowSignup={setShowSignup} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={`route-${i}`} {...route} />
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
