import React, { useState, MouseEvent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

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
    },
}));

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
            <Menu
                id="filter-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {Object.keys(options).map((key: string) => (
                    <MenuItem
                        key={key}
                        selected={key === selected}
                        onClick={(e) => handleSelect(e, key)}
                    >
                        {options[key]}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default FilterMenu;
