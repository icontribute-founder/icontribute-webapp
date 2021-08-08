import styled from "styled-components";
import { CardBase, LightBlueButton } from "./styles";

const StyledLightBlueButton = styled(LightBlueButton)`
    position: absolute;
    top: 14px;
    right: 14px;
`;

const EditableCard = ({ children }: any) => {
    return (
        <CardBase>
            <StyledLightBlueButton>Edit</StyledLightBlueButton>
            {children}
        </CardBase>
    );
};

export default EditableCard;
