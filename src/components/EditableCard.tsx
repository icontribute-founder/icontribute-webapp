import { useHistory } from "react-router";
import styled from "styled-components";
import { CardBase, LightBlueButton } from "./styles";

const StyledLightBlueButton = styled(LightBlueButton)`
  position: absolute;
  top: 14px;
  right: 14px;
`;

const EditableCard = ({ children }: any) => {
  const history = useHistory();
  const handleEditOnClick = () => {
    console.log("clicked");
    history.push("/opportunity/create");
  };

  return (
    <CardBase>
      <StyledLightBlueButton onClick={handleEditOnClick}>
        Edit
      </StyledLightBlueButton>
      {children}
    </CardBase>
  );
};

export default EditableCard;
