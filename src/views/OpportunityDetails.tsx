import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Box } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import InputField from "../components/common/InputField";
import ShiftCard from "../components/ShiftCard";
import TextareaField from "../components/TextareaField";
import WidgetPaper from "../components/WidgetPaper";

const StyledHeader2 = styled.h2`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 120%;
    margin: 0px;
`;

const StyledHeader3 = styled.h3`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 120%;
    margin: 0px;
    color: #133a4b;
`;

const StyledSubtitle = styled.h5`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
    color: #676767;
    margin: 0px 0px 40px 0px;
`;

const OpportunityDetails = () => {
    const [shifts, setShifts] = useState([
        // {
        //     start: new Date(),
        //     end: new Date(),
        //     type: "Does not Repeat",
        //     name: "Shift 1",
        // },
        // {
        //     start: new Date(),
        //     end: new Date(),
        //     type: "Does not Repeat",
        //     name: "Shift 2",
        // },
        // {
        //     start: new Date(),
        //     end: new Date(),
        //     type: "Does not Repeat",
        //     name: "Shift 3",
        // },
        // {
        //     start: new Date(),
        //     end: new Date(),
        //     type: "Does not Repeat",
        //     name: "Shift 4",
        // },
    ]);

    return (
        <Box component="div" m={3} mt={0}>
            <Grid container>
                <Grid item xs={12}>
                    <StyledHeader2>The Opportunity </StyledHeader2>
                    <StyledSubtitle>
                        Let the applicants know more about the open role and
                        their primary responsibilities
                    </StyledSubtitle>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <WidgetPaper>
                            <StyledHeader3 style={{ marginBottom: "28px" }}>
                                The Volunteer Position
                            </StyledHeader3>

                            <InputField
                                label="Position Title"
                                name="position-title"
                                id="position-title"
                                placeholder="Position Title"
                            />
                            <TextareaField
                                label="Description & Other Notes"
                                name="description-notes"
                                id="description-notes"
                                rows={4}
                                numChar={0}
                                maxChar={250}
                                placeholder="Volunteer primary duties and responsibilities"
                            />

                            <InputField
                                label="Requirements"
                                name="requirements"
                                id="requirements"
                                placeholder="Enter custom requirement tags"
                            />
                        </WidgetPaper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {shifts.map((_, i) => (
                                <Grid item md={6} key={uuidv4()}>
                                    <ShiftCard
                                        i={i}
                                        shifts={shifts}
                                        setShifts={setShifts}
                                    />
                                </Grid>
                            ))}
                            <Grid item md={6}>
                                <ShiftCard
                                    isNewShift={true}
                                    shifts={shifts}
                                    setShifts={setShifts}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OpportunityDetails;
