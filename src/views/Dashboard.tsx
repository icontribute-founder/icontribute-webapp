import React, { useContext, useEffect, useState } from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid, List, ListItem, LinearProgress } from "@material-ui/core";
import { uniqueId } from "lodash";
import {
    configApiRequestToken,
    configAuthToken,
    getAccessToken,
    getRefreshBody,
    setAccessToken,
    login,
    searchEvent,
    setRefreshToken,
    AuthUser,
} from "@icontribute-founder/api-wrapper";

import OpportunityCard from "../components/OpportunityCard";
import { dashboardContext } from "../context/dashboardContext";
import DashboardCalendar from "../components/DashboardCalendar";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    // this blocked is used only before login/register portal built up, delete later
    configApiRequestToken(getAccessToken);
    configAuthToken(getRefreshBody, setAccessToken);
    const [events, setEvents] = useState([]);
    const userAuth: any = {
        email: "jiachengzhang1@email.arizona.edu",
        password: "password",
        type: "organization",
};

    const context = useContext(dashboardContext);
    const {
        dashboard: { opportunityType, sortBy },
    } = context;

    useEffect(() => {
        const r = async () => {
            try {
                const {
                    data: { accessToken, refreshToken },
                } = await login(userAuth);

                const query = {
                    type: opportunityType,
                    order: sortBy,
                };
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                const { data: events } = await searchEvent(query);
                setEvents(events);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        r();
    }, [context]);
    // delete later block end

    const daysHaveOpportunities = [].map(({ start }) =>
        new Date(start).toDateString()
    );

    const handleSelectDate = (date: Date) => {
        console.log(date);
    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container>
                    <Grid item lg={4}>
                        <br />
                        <div style={{ position: "fixed" }}>
                            <DashboardCalendar
                                daysHaveOpportunities={daysHaveOpportunities}
                                handleSelectDate={handleSelectDate}
                            />
                        </div>
                    </Grid>
                    <Grid item lg>
                        <List>
                            <ListItem>
                                <h3
                                    style={{
                                        fontSize: "28px",
                                        fontFamily: "Source Sans Pro",
                                        margin: "16px 0px 8px 0px",
                                        width: "100%",
                                    }}
                                >
                                    Your Opportunities
                                </h3>
                            </ListItem>
                            {loading ? (
                                <LinearProgress />
                            ) : (
                                [].map((opportunity) => (
                                    <ListItem key={uniqueId()}>
                                        <OpportunityCard
                                            opportunity={opportunity}
                                        />
                                    </ListItem>
                                ))
                            )}
                        </List>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default Dashboard;
