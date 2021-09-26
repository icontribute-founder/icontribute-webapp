import "styled-components";

interface ICTheme {
    fontFamily: string;
    button: {
        primary: {
            backgroundColor: {
                default: string;
                pressed: string;
                hover: string;
            };
            color: string;
        };
        secondary: {
            backgroundColor: {
                default: string;
                pressed: string;
                hover: string;
            };
            color: string;
        };
        small: { padding: string; fontSize: string };
        medium: { padding: string; fontSize: string };
        large: { padding: string; fontSize: string };
    };
    label: {
        color: { default: string; hover: string; focus: string; error: string };
        fontSize: { default: string; small: string };
    };
    input: {
        border: string;
        backgroundColor: {
            default: string;
            hover: string;
        };
        color: string;
        opacity: { default: number; hover: number };
    };
}

declare module "styled-components" {
    export interface DefaultTheme {
        main: ICTheme;
    }
}
