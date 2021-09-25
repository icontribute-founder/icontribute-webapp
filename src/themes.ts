import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
    main: {
        fontFamily: "'DM Sans', sans-serif",
        button: {
            primary: {
                backgroundColor: {
                    default: "#2836d1",
                    pressed: "#151f8e",
                    hover: "#1b28b6",
                },
                color: "#fefefe",
            },
            secondary: {
                backgroundColor: {
                    default: "#edecff",
                    pressed: "#9d99ff",
                    hover: "#c5c2ff",
                },
                color: "#2836D1",
            },
            small: { padding: "12px 16px 12px 16px", fontSize: "14px" },
            medium: { padding: "8px 20px 8px 20px", fontSize: "16px" },
            large: { padding: "12px 20px 12px 20px", fontSize: "16px" },
        },
        label: {
            color: {
                default: "#8C9092",
                hover: "#90959C",
                focus: "#443DF6",
                error: "#d63334",
            },
            fontSize: { default: "16px", small: "12px" },
        },
        input: {
            border: "1px solid #BABCBD",
            backgroundColor: {
                default: "#FEFEFF",
                hover: "rgba(56, 49, 224, 0.08)",
            },
            color: "#192226",
            opacity: { default: 1, hover: 0.75 },
        },
    },
};

export default defaultTheme;
