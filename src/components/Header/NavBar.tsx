import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { FlexGrow, ToolbarContainer, H1, H3, Logo, StyledLink } from "./style";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";

const NavBar = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <Toolbar>
      <Logo onClick={handleLogoClick}>
        <H1>iContribute</H1>
        <H3>We rise by lifting others.</H3>
      </Logo>
      <SearchBar />
      <FlexGrow />
      <ToolbarContainer>
        <StyledLink to="/" className="dashboard-button">
          Dashboard
        </StyledLink>
        <Link to="/profile">
          <Avatar />
        </Link>
      </ToolbarContainer>
    </Toolbar>
  );
};

export default NavBar;
