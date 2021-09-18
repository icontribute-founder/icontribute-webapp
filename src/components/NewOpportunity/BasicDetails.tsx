import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import MomentUtils from "@date-io/moment";
import CategoryGroup from "../CategoryGroup";
import { Subtitle } from "../styles";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { updateDeadline, updateVirtual } from "../../features/newOpportunity";
import Section from "./Section";

const BasicDetails = () => {
    const dispatch = useDispatch();
    const { deadline, type } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    const handleDeadlineOnChange = (date: any) => {
        dispatch(updateDeadline(new Date(date)));
    };

    const handleOpportunityTypeOnChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        switch ((e.target as HTMLInputElement).value) {
            case "IN_PERSON":
                return dispatch(updateVirtual(false));
            case "VIRTUAL":
                return dispatch(updateVirtual(true));
            default:
                return;
        }
    };

    const content = (
        <>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    disableToolbar
                    variant="inline"
                    inputVariant="outlined"
                    label="Deadline to Apply"
                    value={deadline}
                    onChange={handleDeadlineOnChange}
                />
            </MuiPickersUtilsProvider>
            <h3>Opportunity Type</h3>
            <Subtitle>
                Select the type of opportunity you want to host.
            </Subtitle>
            <RadioGroup
                row
                aria-label="opportunity-type-radio-group"
                name="opportunity-type-radio-group"
                onChange={handleOpportunityTypeOnChange}
                value={type.toString()}
            >
                <FormControlLabel
                    value="IN_PERSON"
                    control={<Radio color="primary" />}
                    label="In-Person"
                />
                <FormControlLabel
                    value="VIRTUAL"
                    control={<Radio color="primary" />}
                    label="Virtual"
                />
            </RadioGroup>
            <h3>Which category do your opportunity fall under?</h3>
            <Subtitle>Select up to 3 categories</Subtitle>
            <CategoryGroup />
        </>
    );

    return (
        <Section
            title="Basic details"
            subtitle="Let the applicants know more about the open role and their
                primary responsibilities."
            content={content}
        />
    );
};

export default BasicDetails;
