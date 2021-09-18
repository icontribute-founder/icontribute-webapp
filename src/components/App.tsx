import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import { icFirebase } from "../configure";
import { addUser } from "../features/authentication";
import { routes } from "../routes";
import { RootState } from "../store";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

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

    icFirebase.isUserLogin((user) => {
        dispatch(addUser(user));
        setLoadingAuth(false);
    });

    if (loadingAuth) {
        return <div>loading</div>;
    }

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

    return layout;
};
export default App;
