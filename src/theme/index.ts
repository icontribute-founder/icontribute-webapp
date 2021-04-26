import { createMuiTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

const baseTheme = {
    palette,
    typography,
};

export const theme = createMuiTheme(baseTheme);
