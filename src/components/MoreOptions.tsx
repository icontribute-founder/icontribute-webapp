import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
  
const MoreOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
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
  
  const handleClose = () => {
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
            onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
  
export default MoreOptions;