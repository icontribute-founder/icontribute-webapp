import React, { useState, MouseEvent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core";
import styled from "styled-components";

const useStyle = makeStyles((theme) => ({
    button: {
        background: "white",
        borderRadius: "24px",
        height: "40px",
        border: "2px solid #026896",
        padding: "10px",
        float: "right",
        marginLeft: "20px",
        fontSize: "16px",
        fontFamily: "Source Sans Pro",
    },
    menuItem: {
        fontFamily: "Source Sans Pro",
        padding: "6px 50px",
    },
}));

const StyledMenu = styled(({ className, ...props }) => (
    <Menu classes={{ paper: className }} {...props} />
))`
    box-shadow: 0px 4px 20px rgba(80, 80, 80, 0.25);
    border-radius: 12px;
`;

const FilterMenu = ({ options, selected, setSelected }: any) => {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (e: MouseEvent<HTMLElement>, i: string) => {
        setSelected(i);
        handleClose();
    };

    return (
        <div>
            <Button
                aria-controls="filter-menu"
                aria-haspopup="true"
                className={classes.button}
                onClick={handleClick}
            >
                {options[selected]}
                <ExpandMoreIcon />
            </Button>
            <StyledMenu
                id="filter-menu"
                anchorEl={anchorEl}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {Object.keys(options).map((key: string) => (
                    <MenuItem
                        className={classes.menuItem}
                        key={key}
                        selected={key === selected}
                        onClick={(e) => handleSelect(e, key)}
                    >
                        {options[key]}
                    </MenuItem>
                ))}
            </StyledMenu>
        </div>
    );
};

export default FilterMenu;
