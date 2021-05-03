import { createMuiTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";
import {
    dashboardCalendarTheme as t1,
    dataTimePickerCalendarTheme as t2,
} from "./calendar";

const baseTheme = {
    palette,
    typography,
};

export const theme = createMuiTheme(baseTheme);

export const dashboardCalendarTheme = createMuiTheme(t1);
export const dataTimePickerCalendarTheme = createMuiTheme(t2);
