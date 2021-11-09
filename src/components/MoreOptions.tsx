import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { confirmAlert } from "react-confirm-alert"; // Import
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import DeletePopUp from "../components/PopUp";


interface MoreOptionsProps {
  eventId: string
  deleteScreen:Function
  //setPopUpOpen:Function
}

const MoreOptions = ({  deleteScreen, eventId }: MoreOptionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [value, setValue] = useState('I love coding');
  const [allowDelete, setAllowDelete] = useState(false);
  const [input, setInput] = React.useState("Save Edits");
  const inputHanlder = (e:any) => {
    setInput(e.target.value);
  };
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
 
  
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
      setDeleteModalOpen(true)
      //deleteScreen(eventId)
      
      //deletePopUP(eventId)
      //setPopUpOpen(true)
      

    }
    
    setAnchorEl(null);
  };

  
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
      {deleteModalOpen && (<DeletePopUp
      handleCancel={() => setDeleteModalOpen(false)}
      ></DeletePopUp>)}
      
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