import { useHistory } from "react-router";
import SignUpImage from "../assets/images/signup-image.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import SearchIcon from "../components/Svgs/SearchIcon";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let [searchQuery, setSearchQuery] = useState("");
  let [sortBy, setSortBy] = useState("");

  const handleOnClick = () => {
    history.push("/new-opportunity");
  };

  const handleSearchQueryChange = (e: any) => {
    console.log("Search query: ", e);
    //dispatch(updateSearchQuery(e.target.value));
  };

  const handleSortByChange = (e: any) => {
    console.log("Sort By: ", e.target.value);
    setSortBy(e.target.value);
  };

  return (
    <div>
      <HeaderContainer>
        <LeftBox>
          <HeaderOne>Your organization dashboard</HeaderOne>
          <HeaderThree>
            Here you can view the volunteer opportunities you've posted, edit
            them, or create a new one.
          </HeaderThree>
        </LeftBox>
        <RightBox>
          <Button onClick={handleOnClick}>Create a new opportunity</Button>
        </RightBox>
      </HeaderContainer>

      <FilterContainer>
        {/*<SearchBox>
          <SearchIcon />
          <InputField
            label=" "
            type="text"
            placeholder="Search events ..."
            name="search-query"
            id="search-query"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </SearchBox>*/}

        <RightBox>
          <FormControl variant="outlined">
            <InputLabel id="sort-by-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-select-label"
              id="sort-by-select"
              value={sortBy}
              label="Sort By"
              onChange={handleSortByChange}
              autoWidth
            >
              <MenuItem value={1}>Distance (Closest)</MenuItem>
              <MenuItem value={2}>Date (Newest)</MenuItem>
            </Select>
          </FormControl>
        </RightBox>
      </FilterContainer>
    </div>
  );
};

export default Dashboard;

const HeaderContainer = styled.div`
  font-family: Source Sans Pro;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid silver;
  flex-direction: row;
  width: 1;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  flex-direction: row;
  width: 1;
  margin-left: 2%;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 0.5;
  padding-left: 2%;
`;

const RightBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 0.5;
  padding-top: 2%;
  padding-right: 3%;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 0%;
  padding-left: 0%;
`;

const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
`;

const HeaderTwo = styled.h2`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: -2%;
    margin-bottom: 1%;
`;

const HeaderThree = styled.h3`
    font-family: Source Sans Pro;
    text-align: left";
    margin-bottom: -2%;
    margin-bottom: 1%;
`;
