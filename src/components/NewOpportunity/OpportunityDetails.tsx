import { Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
    updateDescription,
    updateLocation,
    updateTitle,
} from "../../features/newOpportunity";
import { Shift } from "../../models/opportunity";
import { RootState } from "../../store";
import ShiftCard from "../ShiftCard";
import { Subtitle } from "../styles";

const CustomTextField = ({
    id,
    rows = 1,
    value,
    onChange,
    label,
    placeholder,
}: any) => {
    const isMultiLine = rows > 1;
    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            required
            fullWidth
            placeholder={placeholder}
            InputLabelProps={{
                shrink: true,
            }}
            multiline={isMultiLine}
            rows={rows}
            value={value}
            onChange={onChange}
            margin="normal"
        />
    );
};

const OpportunityDetails = () => {
    const dispatch = useDispatch();
    const { eventName, address, description, shifts } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    const handleTitleOnChange = (e: any) => {
        dispatch(updateTitle(e.target.value));
    };

    const handleLocationOnChange = (e: any) => {
        dispatch(updateLocation(e.target.value));
    };

    const handleDescriptionOnChange = (e: any) => {
        dispatch(updateDescription(e.target.value));
    };

    console.log(shifts);

    return (
        <div>
            <h2>Opportunity Details</h2>
            <Subtitle>
                Let the applicants know more about the open role and their
                primary responsibilities.
            </Subtitle>
            <CustomTextField
                label="Title"
                id="opportunity-details-title"
                placeholder="Enter the opportunity name"
                value={eventName}
                onChange={handleTitleOnChange}
            />
            <CustomTextField
                id="opportunity-details-location"
                label="Location"
                placeholder="Enter organization’s address"
                value={address}
                onChange={handleLocationOnChange}
            />
            <CustomTextField
                id="opportunity-details-description"
                label="Description"
                placeholder="Enter position’s primary duties and responsibilities"
                value={description}
                onChange={handleDescriptionOnChange}
                rows={8}
            />
            <h3>Shift</h3>
            <Grid container spacing={2}>
                {shifts.map((shift: Shift, i: number) => (
                    <Grid item md={6} key={`grid-shift-${i}`}>
                        <ShiftCard shift={shift} index={i} />
                    </Grid>
                ))}
                <Grid item md={6}>
                    <ShiftCard />
                </Grid>
            </Grid>
            <h4>Upload Photo (Optional)</h4>
        </div>
    );
};

export default OpportunityDetails;
