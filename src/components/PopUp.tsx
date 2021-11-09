import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

import styled from "styled-components";
import { confirmAlert } from "react-confirm-alert"; // Import

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DeletePopUpProps {
  handleCancel: Function;
}

const DeletePopUp = ({ handleCancel }: DeletePopUpProps) => {
  const [disable, setDisable] = useState({}); // using this
  const [value, setValue] = useState("I love coding");
  
  const [input, setInput] = React.useState("Save Edits");
  const inputHanlder = (e: any) => {
    setInput(e.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        padding: "0%",
      }}
    >
      <Modal
      hideBackdrop = {true}
        open={true}
        //onClose={setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            left: "75%",
            transform: "translate(-50%, -50%)",
            width:"385px",
            height:"300px",
            bgcolor: "background.paper",
            borderRadius:"8px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            
          }}
        >

          <HeaderOne style={{ fontFamily: "Source Sans Pro", textAlign: "center", fontSize:24 }}>
            Are you sure?
          </HeaderOne> 

          <HeaderTwo
            style={{ fontFamily: "Source Sans Pro", textAlign: "center" ,fontSize:14 }}
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
              padding: "30px",
              
            }}
            
          >
            <label style={{ height: 30, width: "100%" }}>
              <input
                type="text"
                name="name"
                placeholder="type 'DELETE'"
                style={{ height: 30, width: "100%",border: "1px solid #D1D2D3" }}
                onChange={
                  (e) =>{
                    //{setValue(e.currentTarget.value)
                    console.log(e.currentTarget.value)
                    setValue(e.currentTarget.value )}
                    //e.currentTarget.value === 'DELETE' ?  <></>: <></>}
                  //console.log(value)
                }
              />
            </label>
          </form> 

           
          <HeaderThree
            style={{
              fontFamily: "Source Sans Pro",
              textAlign: "center",
              fontSize: "10px",
              paddingBottom:'20px'
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
                  //setDisable({});
                  //onClose();
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
                  fontSize:16
                }}
              >
                Cancel
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                id="delete-button"
                style={{
                  backgroundColor: 'white',
                  color: "#D1D2D3",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  padding: "20px 40% 25px 20%",
                  borderRight: "0px",
                  borderBottom: "0px",
                  borderLeft: "0px",
                  borderTop: "1px #D1D2D3 solid",
                  opacity: 0.5,
                  fontSize:16,
                  pointerEvents: value === 'DELETE' ?  'auto': 'none'
                }}
                onClick={() => {
                  //console.log("an element is being deleted", eventID)
                  //setValue("DELETE")
                  //opportunityCollection.deleteOpportunity(eventID)
                  //console.log(opportunityCollection.deleteOpportunity(eventID))
                  //setDisable({});
                  //onClose();
                  handleCancel()
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

/*
  const DeletePopUp = () => {
   // const [open, setOpen] = useState(false);
   // const handleClose = () => setOpen(false);
    //setDisable({ opacity: 0.5, pointerEvents: "none" });
    
    ////confirmAlert({
    
      //closeOnClickOutside: false,
      //customUI: ({ onClose }) => {
        //const [open, setOpen] = useState(true);
       
        
        return (

          <div
          className="popup-box"
            style={{backgroundColor: "black", zIndex:1000}}
          >
          
            <HeaderOnePopUp
              style={{
                color: "#2836D1",
                fontFamily: "Source Sans Pro",
                textAlign: "center",
              }}
            >
              Are you sure?
            </HeaderOnePopUp>
            <Modal open={true}
                //onClose={setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
              <Box >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
            </Modal>
            <HeaderTwo
              style={{ fontFamily: "Source Sans Pro", textAlign: "center" }}
            >
              If you’d like to delete this opportunity, type ‘DELETE’ in the
              text box below to confirm.
            </HeaderTwo>
            <form
              style={{
                height: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
              }}
            >
              <label style={{ height: 30, width: "100%" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="type 'DELETE'"
                  style={{ height: 30, width: "100%" }}
                  onChange={(e) =>
                    //{setValue(e.currentTarget.value)
                    console.log(e.currentTarget.value)
                    //console.log(value)
                    }
                    
                />
              </label>
            </form>

            <HeaderThree
              style={{
                fontFamily: "Source Sans Pro",
                textAlign: "center",
                fontSize: "10px",
              }}
            >
              WARNING: if you delete this opportunity, you will lose its details
              and automatically decline all the active applicants. This cannot
              be undone.
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
                    //setDisable({});
                    //onClose();
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#2836D1",
                    padding: "30px 45% 30px 45%",
                    borderRight: '1px #D1D2D3 solid',
                    borderBottom: '0px',
                    borderLeft:"0px",
                    borderTop:"1px #D1D2D3 solid",
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
                    color: "#D1D2D3",
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                    padding: "30px 50% 30px 30%",
                    borderRight: '0px',
                    borderBottom: '0px',
                    borderLeft:"1px #D1D2D3 solid",
                    borderTop:"1px #D1D2D3 solid",
                    opacity: 0.5,
                    
                  }}
                  onClick={() => {
                    //console.log("an element is being deleted", eventID)
                    //setValue("DELETE")
                    //opportunityCollection.deleteOpportunity(eventID)
                    //console.log(opportunityCollection.deleteOpportunity(eventID))
                    //setDisable({});
                    //onClose();
                  }}
                >
                  Delete Opportunity
                </button>
              </Grid>
            </Grid>
            
          </div>
        );
      //},
    //});

  
  

  };

   */

//CustomPopup.propTypes = {
//  title: PropTypes.string.isRequired,
//  show: PropTypes.bool.isRequired,
//  onClose: PropTypes.func.isRequired
//};
export const HeaderOne = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    color: 'red';
    textAlign: "center";
    fontFamily: "Source Sans Pro",
   
`;

const HeaderTwo = styled.p`
  font-weight: bold;
  margin: 0px;
  color:'red'
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

  color: #192226;
`;

export default DeletePopUp;
