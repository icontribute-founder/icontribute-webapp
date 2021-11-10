import { ChangeEvent, useState } from "react";
import { Grid, Modal } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteOpportunity } from "../features/opportunities";

interface DeletePopUpProps {
  handleCancel: Function;
}

const DeletePopUp = ({ handleCancel }: DeletePopUpProps) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { opportunities, indexSelected } = useSelector(
    (state: RootState) => state.opportunities
  );

  if (!opportunities || opportunities.length === 0) {
    return <></>;
  }

  const handleDeleteInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleCancelButtonOnClick = () => {
    handleCancel();
  };

  const handleDeleteOpportunityButtonOnClick = () => {
    dispatch(
      deleteOpportunity({ eventId: opportunities[indexSelected].eventID })
    );
    handleCancel();
  };

  return (
    <Modal
      hideBackdrop={false}
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBody>
        <ModalContent>
          <Title>Are you sure?</Title>
          <Description>
            If you’d like to delete this opportunity, type ‘DELETE’ in the text
            box below to confirm.
          </Description>
          <DeleteInput
            type="text"
            name="delete-input"
            placeholder="Type 'DELETE'"
            onChange={handleDeleteInputOnChange}
          />
          <Warning>
            WARNING: if you delete this opportunity, you will lose its details
            and automatically decline all the active applicants. This cannot be
            undone.
          </Warning>
        </ModalContent>
        <Grid container>
          <Grid item xs={6}>
            <CancelButton onClick={handleCancelButtonOnClick}>
              Cancel
            </CancelButton>
          </Grid>
          <Grid item xs={6}>
            <DeleteButton
              id="delete-button"
              disabled={value !== "DELETE"}
              onClick={handleDeleteOpportunityButtonOnClick}
            >
              Delete Opportunity
            </DeleteButton>
          </Grid>
        </Grid>
      </ModalBody>
    </Modal>
  );
};

const ModalBody = styled.div`
  position: absolute;
  top: 55%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 385px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ModalContent = styled.div`
  padding-left: 20px;
  padding-right: 32px;
`;

const Warning = styled.p`
  font-family: Source Sans Pro;
  line-height: 18px;
  font-size: 10px;
`;

const Title = styled.p`
  font-family: Source Sans Pro;
  font-size: 24px;
  text-align: center;
  margin: 0px;
  padding: 0px;
  padding-top: 20px;
  color: #2836d1;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-family: Source Sans Pro;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 12px;
`;

const DeleteInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #d1d2d3;
`;

const Button = styled.button`
  max-width: 100%;
  background-color: white;
  color: #2836d1;
  padding: 20px 40% 25px 40%;
  border: none;
  border-top: 1px #d1d2d3 solid;
  font-size: 16px;
  &: hover {
    cursor: pointer;
  }
`;

const CancelButton = styled(Button)`
  border-bottom-left-radius: 8px;
  border-right: 1px #d1d2d3 solid;
`;

interface DeleteButtonProps {
  disabled: boolean;
}

const DeleteButton = styled(Button)<DeleteButtonProps>`
  color: ${(props: DeleteButtonProps) => {
    return !props.disabled ? "#2836D1" : "#D1D2D3";
  }};

  pointer-events: ${(props: DeleteButtonProps) => {
    return !props.disabled ? "auto" : "none";
  }};

  white-space: nowrap;
  border-bottom-right-radius: 8px;
  padding: 20px 40% 25px 15%;
`;

export default DeletePopUp;
