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
import { editShift, newShift, removeShift } from "../features/opportunity";
import { RootState } from "../store";
import { defaultShift, Shift } from "@icontribute-founder/firebase-access";

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
  const {
    opportunity: { shift: shifts },
  } = useSelector((state: RootState) => state.opportunity);

  const initialShift: Shift =
    edit && index !== -1 ? { ...shifts[index] } : defaultShift;

  const [shift, setShift] = useState(initialShift);

  const handleStartOnChange = (e: any) => {
    setShift({ ...shift, start: new Date(e).getTime() });
  };

  const handleEndOnChange = (e: any) => {
    setShift({ ...shift, end: new Date(e).getTime() });
  };

   const handleLimitOnChange = (e: any) => {
     setShift({ ...shift, limit: e.target.value });
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
      <DialogTitle id={`customized-dialog-title-${index}`} onClose={onClose}>
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
            <Grid item md={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id={`limit-select-label-${index}`}>
                  Number of Participants
                </InputLabel>
                <Select
                    labelId={`limit-select-label-${index}`}
                    id={`limit-select-${index}`}
                    value={shift.limit}
                    onChange={handleLimitOnChange}
                    label="Number of Participants"
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                    <MenuItem value="13">13</MenuItem>
                    <MenuItem value="14">14</MenuItem>
                    <MenuItem value="15">15</MenuItem>
                    <MenuItem value="16">16</MenuItem>
                    <MenuItem value="17">17</MenuItem>
                    <MenuItem value="18">18</MenuItem>
                    <MenuItem value="19">19</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                </Select>
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
