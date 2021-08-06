import React from "react";
import { useLocation } from "react-router";
import { Container, Toolbar } from "@material-ui/core";
import { FlexGrow, StyledAppBar } from "./style";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";


const Header = () => {
    const location = useLocation();
    
    const showFilter = location.pathname === "/Dashboard";
    const showNavbar = location.pathname != "/" && location.pathname !="/SignUp";

    return (
        <FlexGrow>
            <StyledAppBar>
                <Container fixed>
                    {showNavbar ? <NavBar /> : ""}
                    {showFilter ? <FilterBar /> : ""}
                </Container>
            </StyledAppBar>
            <Toolbar />
            <Toolbar />
        </FlexGrow>
    );
};

export default Header;
