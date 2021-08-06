import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { FlexGrow, ToolbarContainer, H1, H3, Logo, StyledLink } from "./style";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";
import { StyledButton } from "../OpportunityCard/style";

const NavBar = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/Dashboard");
  };
  const handleSignUpClick = () => {
    history.push("/SignUp");
  };
  const handleLoginClick = () => {
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

        <StyledButton
          onClick = {handleLoginClick}
          style = {buttonStyle}
        ><div>Login</div>
        </StyledButton>

        <StyledButton
          onClick = {handleSignUpClick}
          style = {buttonStyle}
        >Sign&nbsp;up
        </StyledButton>

        <Link to="/profile">
          <Avatar />
        </Link>
      </ToolbarContainer>
    </Toolbar>
  );
};
const buttonStyle: React.CSSProperties = {
  width: '70px',
  height: '40px',
  fontSize: '12px',
}

export default NavBar;
