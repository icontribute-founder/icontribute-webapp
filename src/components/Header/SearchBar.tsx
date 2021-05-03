import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { SearchContainer, SearchIconContainer, SytledInputBase } from "./style";
const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchIconContainer>
                <SearchIcon />
            </SearchIconContainer>
            <SytledInputBase
                placeholder="Search"
                inputProps={{
                    "aria-label": "search",
                }}
            />
        </SearchContainer>
    );
};

export default SearchBar;
