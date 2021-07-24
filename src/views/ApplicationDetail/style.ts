import styled from "styled-components";
import { ICButton } from "../../styledComponents/Buttons";
import { ICCardContent } from "../../styledComponents";

interface StyledICButtonInterface {
    selected: boolean;
    disabled: boolean;
}

export const StyledICCardContent = styled(ICCardContent)`
    margin-top: 28px;
`;

export const StyledICButton = styled(ICButton)<StyledICButtonInterface>`
    display: flex;
    margin: auto;
    margin-top: 49px;
    background-color: ${(props: any) => (props.selected ? "#026893" : "white")};
    color: ${(props: any) =>
        props.disabled ? "gray" : props.selected ? "white" : "#026893"};
    border-color: ${(props: any) => (props.disabled ? "gray" : "#026893")};
    &:hover {
        cursor: ${(props: any) =>
            props.disabled ? "not-allowed;" : "pointer"};
    }
`;

export const StyledInput = styled.input`
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 24px;
    font-family: Source Sans Pro;
    font-size: 16px;
    align-items: center;
    padding: 10px;
    padding-left: 50px;
    width: 100%;
`;

export const IconInput = styled.div`
    position: relative;

    & > svg {
        position: absolute;
        left: 18px;
        top: 12px;
    }
`;

export const StyledIconInput = styled(IconInput)`
    margin-top: 30px;
`;
