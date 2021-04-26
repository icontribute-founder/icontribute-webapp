import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import ThemeButton from "../common/ThemeButton";
import { FlexGrow, ToolbarContainer } from "./style";
import FilterMenu from "./FilterMenu";
import { dashboardContext } from "../../context/dashboardContext";

const sortByOptions = { des: "Newest", asc: "Oldest" };

const typeOptions = {
    all: "All Events",
    live: "Live Events",
    draft: "Draft Events",
    past: "Past Events",
};

const FilterBar = () => {
    const { dashboard, setDashboard } = useContext(dashboardContext);
    const { opportunityType, sortBy } = dashboard;
    const history = useHistory();

    const typeSelected = (type: string) => {
        setDashboard({ ...dashboard, opportunityType: type });
    };

    const sortBySelected = (sortBy: string) => {
        setDashboard({ ...dashboard, sortBy });
    };

    const handleCreateOpportunityClick = () => {
        history.push("/new-opportunity");
    };

    return (
        <Toolbar>
            <ThemeButton
                text="Create Opportunity"
                onClick={handleCreateOpportunityClick}
            />
            <FlexGrow />
            <ToolbarContainer>
                <FilterMenu
                    options={sortByOptions}
                    selected={sortBy}
                    setSelected={sortBySelected}
                />
                <FilterMenu
                    options={typeOptions}
                    selected={opportunityType}
                    setSelected={typeSelected}
                />
            </ToolbarContainer>
        </Toolbar>
    );
};

export default FilterBar;
