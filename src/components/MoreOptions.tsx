import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DeletePopUp from "../components/DeletePopUp";
import { setAction } from "../features/opportunity";

const MoreOptions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditOpportunity = () => {
    history.push("/opportunity/edit");
    dispatch(setAction("edit"));
    handleClose();
  };

  const handleDuplicateOpportunity = () => {
    history.push("/opportunity/duplicate");
    dispatch(setAction("create"));
    handleClose();
  };

  const handleDeleteOpportunity = () => {
    setDeleteModalOpen(true);
    handleClose();
  };

  const handleDeletePopupCancel = () => setDeleteModalOpen(false);

  const options = [
    { name: "Edit Opportunity", handler: handleEditOpportunity },
    { name: "Duplicate Opportunity", handler: handleDuplicateOpportunity },
    { name: "Delete Opportunity", handler: handleDeleteOpportunity },
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMoreOptions>
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
        {options.map(({ handler, name }) => (
          <MenuItem key={`option-${name}`} onClick={handler}>
            {name}
          </MenuItem>
        ))}
      </Menu>
      {deleteModalOpen && (
        <DeletePopUp handleCancel={handleDeletePopupCancel} />
      )}
    </StyledMoreOptions>
  );
};

const StyledMoreOptions = styled.div`
  padding: 0%;
`;

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
