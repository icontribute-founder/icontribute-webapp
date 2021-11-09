import { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../store";
import { setAction } from "../features/opportunity";

const MoreOptions = ({ opportunity }: any) => {
  // console.log(opportunity);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

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
    handleClose();
  };

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
        {options.map(({ handler, name }) => (
          <MenuItem key={`option-${name}`} onClick={handler}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreOptions;
