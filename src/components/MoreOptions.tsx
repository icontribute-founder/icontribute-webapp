import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { confirmAlert } from "react-confirm-alert"; // Import
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";


interface MoreOptionsProps {
  eventId: string
  deleteScreen:Function

}

const MoreOptions = ({  deleteScreen, eventId }: MoreOptionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [disable, setDisable] = useState({});
  const [value, setValue] = useState('I love coding');
  const [allowDelete, setAllowDelete] = useState(false);
  const [input, setInput] = React.useState("Save Edits");
  const inputHanlder = (e:any) => {
    setInput(e.target.value);
  };
 
  
  const MyOptions = [
    "Edit Opportunity",
    "Duplicate Opportunity",
    "View all applicants",
    "Delete Opportunity",
  ];
  
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  
  const handleClose = (option:any) => {
    if (option === 'Delete Opportunity'){
      console.log("The option that was selected", option)
      deleteScreen(eventId)
      //deletePopUP(eventId)

    }
    
    setAnchorEl(null);
  };

  /*
  const deletePopUP = (id: any) => {
    setDisable({ opacity: 0.5, pointerEvents: "none" });
    
    confirmAlert({
    
      closeOnClickOutside: false,
      customUI: ({ onClose }) => {
        return (
          <div
            className="custom-ui"
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
                    {setValue(e.currentTarget.value)
                    console.log(e.currentTarget.value)
                    console.log(value)
                    }
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
                    setDisable({});
                    onClose();
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
                    backgroundColor: value === "DELETE" ? "#6ad0d4" : "#FFFFFF", 
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
                    setDisable({});
                    onClose();
                  }}
                >
                  Delete Opportunity
                </button>
              </Grid>
            </Grid>
            <div className="App">
              
      <input onChange={inputHanlder} value={input} />
      <br />
      Change the button background color based on it's text content
      <br />
      <button
        style={{
          backgroundColor: input === "Save Edits" ? "#6ad0d4" : "#222222",
          color: "white"
        }}
      >
        {input}
      </button>
    </div>
          </div>
        );
      },
    });
  };
   */
  return (
    <div
      style={{
        padding: "0%",
        
      }}
    >
      <IconButton
        aria-label="more"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="long-menu"
        style={{
          padding: "0%",
          
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu 
        anchorEl={anchorEl} 
        keepMounted onClose={handleClose} 
        open={open}>
        {MyOptions.map((option) => (
          <MenuItem
            key={option} 
            onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
 
};

export const HeaderOnePopUp = styled.h1`
    font-family: Source Sans Pro;
    font-weight: bold;
    text-align: left";
    color: #2836D1;
    textAlign: 'center';
`;
const HeaderTwo = styled.p`
  font-weight: bold;
  margin: 0px;
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

  color: #192226;
`;

  
export default MoreOptions;