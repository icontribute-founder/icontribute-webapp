import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import { addUser } from "../features/authentication";
import { routes } from "../routes";
import { RootState } from "../store";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import defaultTheme from "../themes";

const RouteWithSubRoutes = (route: any) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};

const App = () => {
    const { user } = useSelector((state: RootState) => state.authentication);
    const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
    const dispatch = useDispatch();

    const layout = true ? (
        <Router>
            <Header />
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={`route-${i}`} {...route} />
                ))}
            </Switch>
        </Router>
    ) : (
        <Login />
    );

    return <ThemeProvider theme={defaultTheme}>{layout}</ThemeProvider>;
};
export default App;
