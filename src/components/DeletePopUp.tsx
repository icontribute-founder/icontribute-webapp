import { useState } from "react";
import { Grid, Modal } from "@material-ui/core";
import { opportunityCollection } from "../configure";

import styled from "styled-components";

interface DeletePopUpProps {
  handleCancel: Function;
  opportunityId: string;
  handleCardOnClick: Function;
}

const DeletePopUp = ({
  handleCancel,
  opportunityId,
  handleCardOnClick,
}: DeletePopUpProps) => {
  const [value, setValue] = useState("");

  return (
    <Modal
      hideBackdrop={false}
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBody>
        <ModalContent>
          <p
            style={{
              fontFamily: "Source Sans Pro",
              fontSize: 24,
              textAlign: "center",
              margin: 0,
              marginBottom: 12,
              padding: 0,
              paddingTop: 20,
              color: "#2836D1",
            }}
          >
            Are you sure?
          </p>

          <p
            style={{
              fontFamily: "Source Sans Pro",
              fontSize: 14,
              lineHeight: "20px",
              marginBottom: 12,
              margin: 0,
            }}
          >
            If you’d like to delete this opportunity, type ‘DELETE’ in the text
            box below to confirm.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Type 'DELETE'"
            style={{
              width: "300px",
              padding: "10px",
              border: "1px solid #D1D2D3",
            }}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              setValue(e.currentTarget.value);
            }}
          />

          <p
            style={{
              fontFamily: "Source Sans Pro",
              lineHeight: "18px",
              fontSize: 10,
            }}
          >
            WARNING: if you delete this opportunity, you will lose its details
            and automatically decline all the active applicants. This cannot be
            undone.
          </p>
        </ModalContent>
        <Grid
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={6}>
            <button
              onClick={() => {
                handleCancel();
              }}
              style={{
                maxWidth: "100%",
                backgroundColor: "white",
                color: "#2836D1",
                padding: "20px 40% 25px 40%",
                border: "none",
                borderRight: "1px #D1D2D3 solid",
                borderTop: "1px #D1D2D3 solid",
                fontSize: 16,
                borderBottomLeftRadius: "8px",
              }}
            >
              Cancel
            </button>
          </Grid>
          <Grid item xs={6}>
            <button
              id="delete-button"
              style={{
                backgroundColor: "white",
                color: value === "DELETE" ? "#2836D1" : "#D1D2D3",
                maxWidth: "100%",
                whiteSpace: "nowrap",
                padding: "20px 40% 25px 20%",
                border: "none",
                borderTop: "1px #D1D2D3 solid",
                fontSize: 16,
                pointerEvents: value === "DELETE" ? "auto" : "none",
                borderBottomRightRadius: "8px",
              }}
              onClick={() => {
                const deleteOpportunity = async () => {
                  await opportunityCollection.deleteOpportunity(
                    opportunityId.replace(" ", "")
                  );
                  const data: any =
                    await opportunityCollection.getOpportunities();

                  const result = data.filter(
                    (item: any) => item.deleted !== true
                  );
                  if (result[0] != null) {
                    handleCardOnClick(0, 0, result[0]);
                  }
                  // setOpportunity(result);
                };

                deleteOpportunity();

                handleCancel();
              }}
            >
              Delete Opportunity
            </button>
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

export default DeletePopUp;
