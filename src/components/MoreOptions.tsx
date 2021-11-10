import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import DeletePopUp from "../components/PopUp";

interface MoreOptionsProps {
  eventId: string;
  setOpportunity: Function;
  setDeleteModalOpen:Function;
  deleteModalOpen:boolean;
  handleCardOnClick:Function;
}

const MoreOptions = ({ eventId, setOpportunity, setDeleteModalOpen,deleteModalOpen,handleCardOnClick }: MoreOptionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const MyOptions = [
    "Edit Opportunity",
    "Duplicate Opportunity",
    "View all applicants",
    "Delete Opportunity",
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = (option: any) => {
    if (option === "Delete Opportunity") {
      console.log("The option that was selected", option);
      setDeleteModalOpen(true);
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
      <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
        {MyOptions.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      {deleteModalOpen && (
        <DeletePopUp
          opportunityId={eventId}
          handleCancel={() => setDeleteModalOpen(false)}
          setOpportunity={setOpportunity}
          handleCardOnClick = {handleCardOnClick}
        ></DeletePopUp>
      ) }
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

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;

  color: #192226;
`;

export default MoreOptions;
