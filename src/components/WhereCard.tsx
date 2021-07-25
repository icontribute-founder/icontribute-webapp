import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ICCard, ICCardTitle, ICCardContent } from "../styledComponents";
import InputField from "../components/common/InputField";
import styled from "styled-components";

const StyledH4 = styled.h4`
    font-weight: normal;
    margin: 0px;
`;

const StyledLabel = styled.span`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
`;

const WhereCard = () => {
    const [value, setValue] = useState("female");

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <ICCard>
            <ICCardTitle>Where</ICCardTitle>
            <ICCardContent>
                <FormControl component="fieldset">
                    <StyledH4>Opportunity Type</StyledH4>
                    <RadioGroup
                        aria-label="opportunityType"
                        name="opportunityType"
                        value={value}
                        row
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="virtual"
                            control={<Radio color="primary" />}
                            label={<StyledLabel>Virtual</StyledLabel>}
                        />
                        <FormControlLabel
                            value="inPerson"
                            control={<Radio color="primary" />}
                            label={<StyledLabel>In Person</StyledLabel>}
                        />
                    </RadioGroup>
                </FormControl>
            </ICCardContent>
            <InputField
                label="Where will it take place?"
                placeholder="Choose Place"
            />
        </ICCard>
    );
};

export default WhereCard;
