import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Header from "./Header";
import { routes } from "../routes";
import { theme } from "../theme";

const StyledApp = styled.div`
    height: fit-content;
`;

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
    const [dashboard, setDashboard] = useState(intialDashboard);

    const router = (
        <Router>
            <Header />
            <Container fixed>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={`route-${i}`} {...route} />
                    ))}
                </Switch>
            </Container>
        </Router>
    );
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <dashboardContext.Provider value={{ dashboard, setDashboard }}>
                    <StyledApp>{router}</StyledApp>
                </dashboardContext.Provider>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;
