import { useState } from "react";
import { Grid } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React from "react";
import { opportunityCollection } from "../configure";

import styled from "styled-components";

interface DeletePopUpProps {
  handleCancel: Function;
  opportunityId: string;
  setOpportunity: Function;
  handleCardOnClick: Function;
}

const DeletePopUp = ({
  handleCancel,
  opportunityId,
  setOpportunity,
  handleCardOnClick,
}: DeletePopUpProps) => {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        padding: "0%",
      }}
    >
      <Modal
        hideBackdrop={true}
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            left: "75%",
            transform: "translate(-50%, -50%)",
            width: "385px",
            height: "300px",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <HeaderOne
            style={{
              fontFamily: "Source Sans Pro",
              textAlign: "center",
              fontSize: 24,
              paddingTop: "10px",
              color: "#2836D1",
            }}
          >
            Are you sure?
          </HeaderOne>

          <HeaderTwo
            style={{
              fontFamily: "Source Sans Pro",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            If you’d like to delete this opportunity, type ‘DELETE’ in the text
            box below to confirm.
          </HeaderTwo>

          <form
            style={{
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 30px 30px 30px",
            }}
          >
            <label style={{ height: 30, width: "100%" }}>
              <input
                type="text"
                name="name"
                placeholder="type 'DELETE'"
                style={{
                  height: 30,
                  width: "100%",
                  border: "1px solid #D1D2D3",
                }}
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                  setValue(e.currentTarget.value);
                }}
              />
            </label>
          </form>

          <HeaderThree
            style={{
              fontFamily: "Source Sans Pro",
              textAlign: "center",
              fontSize: "10px",
              paddingBottom: "20px",
            }}
          >
            WARNING: if you delete this opportunity, you will lose its details
            and automatically decline all the active applicants. This cannot be
            undone.
          </HeaderThree>

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
                  backgroundColor: "white",
                  color: "#2836D1",
                  padding: "20px 40% 25px 40%",
                  borderRight: "1px #D1D2D3 solid",
                  borderBottom: "0px",
                  borderLeft: "0px",
                  borderTop: "1px #D1D2D3 solid",
                  fontSize: 16,
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
                  borderRight: "0px",
                  borderBottom: "0px",
                  borderLeft: "1px #D1D2D3 solid",
                  borderTop: "1px #D1D2D3 solid",
                  fontSize: 16,
                  pointerEvents: value === "DELETE" ? "auto" : "none",
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
                    setOpportunity(result);
                  };

                  deleteOpportunity();

                  handleCancel();
                }}
              >
                Delete Opportunity
              </button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export const HeaderOne = styled.h1`
  font-family: Source Sans Pro;
  font-weight: bold;
  textalign: "center";
  fontfamily: "Source Sans Pro";
`;

const HeaderTwo = styled.p`
  margin: 0px;
  color: "red";
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

  color: #192226;
`;

export default DeletePopUp;
