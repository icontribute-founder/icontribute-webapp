import styled from "styled-components";
import { CardBase, LightBlueButton } from "./styles";

const StyledLightBlueButton = styled(LightBlueButton)`
    position: absolute;
    top: 20px;
    right: 20px;
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
