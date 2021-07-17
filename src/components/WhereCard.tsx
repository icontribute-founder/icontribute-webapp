import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { ICCard, ICCardTitle, ICCardContent } from "../styledComponents";

const WhereCard = () => {
    const [value, setValue] = useState("female");

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <ICCard>
            <ICCardTitle>Where</ICCardTitle>
            <ICCardContent>
                <h4>Opportunity Type</h4>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                        />
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="(Disabled option)"
                        />
                    </RadioGroup>
                </FormControl>
            </ICCardContent>
        </ICCard>
    );
};

export default WhereCard;
