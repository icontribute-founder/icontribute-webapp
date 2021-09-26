import styled from "styled-components";

interface ButtonProps {
    primary?: boolean;
    secondary?: boolean;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
}

const Button = styled.button<ButtonProps>(
    ({
        primary = true,
        secondary = false,
        large = false,
        medium = true,
        small = false,
        disabled = false,
        theme: {
            main: { button, fontFamily },
        },
    }) => {
        const {
            primary: primaryBtn,
            secondary: secondaryBtn,
            small: smallBtn,
            medium: mediumBtn,
            large: largeBtn,
        } = button;

        if (disabled) {
            return `
                
            `;
        }

        return `
        background: ${
            secondary
                ? secondaryBtn.backgroundColor.default
                : primary
                ? primaryBtn.backgroundColor.default
                : primaryBtn.backgroundColor.default
        };
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: ${
            large
                ? largeBtn.padding
                : medium
                ? mediumBtn.padding
                : small
                ? smallBtn.padding
                : mediumBtn.padding
        };
        border: none;
        color: ${
            secondary
                ? secondaryBtn.color
                : primary
                ? primaryBtn.color
                : primaryBtn.color
        };
        font-family: ${fontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: ${
            large
                ? largeBtn.fontSize
                : medium
                ? mediumBtn.fontSize
                : small
                ? smallBtn.fontSize
                : mediumBtn.fontSize
        };
        line-height: 150%;

        &:hover {
            background-color: ${
                secondary
                    ? secondaryBtn.backgroundColor.hover
                    : primary
                    ? primaryBtn.backgroundColor.hover
                    : primaryBtn.backgroundColor.hover
            };
            cursor: pointer;
        }

        &:active {
            background-color: ${
                secondary
                    ? secondaryBtn.backgroundColor.pressed
                    : primary
                    ? primaryBtn.backgroundColor.pressed
                    : primaryBtn.backgroundColor.pressed
            };
        }
    `;
    }
);

export default Button;
