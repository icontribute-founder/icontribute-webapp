import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import { routes } from "../routes";
import Login from "../views/Login";

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
    const hasLogin = false;

    const layout = hasLogin ? (
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

    return layout;
};

export default App;
