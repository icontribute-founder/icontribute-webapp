import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import {
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import React, { useState } from "react";
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { useDispatch, useSelector } from "react-redux";
import { editShift, newShift, removeShift } from "../features/newOpportunity";
import { RootState } from "../store";
import Shift from "../firebase-access/models/Shift";
import { defaultShift } from "../firebase-access/models";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

interface ShiftDialogProps {
    open: boolean;
    onClose: any;
    edit?: boolean;
    index: number;
}

const ShiftDialog = ({
    onClose,
    open,
    edit = false,
    index,
}: ShiftDialogProps) => {
    const dispatch = useDispatch();
    const { shifts } = useSelector((state: RootState) => state.newOpportunity);

    const initialShift: Shift =
        edit && index !== -1 ? { ...shifts[index] } : defaultShift;

    const [shift, setShift] = useState(initialShift);

    const handleStartOnChange = (e: any) => {
        setShift({ ...shift, start: new Date(e) });
    };

    const handleEndOnChange = (e: any) => {
        setShift({ ...shift, end: new Date(e) });
    };

    const handleRecurrenceOnChange = (e: any) => {
        setShift({ ...shift, recurring: e.target.value });
    };

    const handleOnSave = () => {
        if (edit) {
            dispatch(editShift({ shift, index }));
        } else {
            dispatch(newShift(shift));
        }
        onClose();
    };

    const handleOnDelete = () => {
        dispatch(removeShift(index));
        onClose();
    };

    return (
        <Dialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth
        >
            <DialogTitle
                id={`customized-dialog-title-${index}`}
                onClose={onClose}
            >
                Create New Shift
            </DialogTitle>
            <MuiDialogContent>
                <Typography variant="h6" gutterBottom>
                    Shift Details
                </Typography>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <DateTimePicker
                                variant="inline"
                                fullWidth
                                inputVariant="outlined"
                                label="Start Date and Time"
                                minDate={Date.now()}
                                value={shift.start}
                                onChange={handleStartOnChange}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <DateTimePicker
                                variant="inline"
                                fullWidth
                                minDate={new Date(shift.start)}
                                inputVariant="outlined"
                                label="End Date and Time"
                                value={shift.end}
                                onChange={handleEndOnChange}
                                minDateMessage="Date should not be before start date."
                            />
                        </Grid>
                        <Grid item md={12}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                    id={`recurrence-select-label-${index}`}
                                >
                                    Recurrence
                                </InputLabel>
                                {/* <Select
                                    labelId={`recurrence-select-label-${index}`}
                                    id={`recurrence-select-${index}`}
                                    value={shift.recurrence}
                                    onChange={handleRecurrenceOnChange}
                                    label="Recurrence"
                                >
                                    <MenuItem value="DOES_NOT_REPEAT">
                                        Does not repeat
                                    </MenuItem>
                                    <MenuItem value="DAILY">Daily</MenuItem>
                                    <MenuItem value="WEEKLY_ON_THURSDAY">
                                        Weekly on Thursday
                                    </MenuItem>
                                    <MenuItem value="EVERY_WEEKDAY">
                                        Every weekday (Monday to Friday)
                                    </MenuItem>
                                </Select> */}
                            </FormControl>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </MuiDialogContent>
            <MuiDialogActions>
                <Button onClick={handleOnSave} color="primary">
                    Save
                </Button>
                {edit ? (
                    <Button onClick={handleOnDelete} color="primary">
                        Delete
                    </Button>
                ) : (
                    ""
                )}

                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
            </MuiDialogActions>
        </Dialog>
    );
};

export default ShiftDialog;
