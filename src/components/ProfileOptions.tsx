import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DeletePopUp from "./DeletePopUp";
import { setAction } from "../features/opportunity";
import { logout } from "../features/user";
import { ExitToApp, Help, Info } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import smallLogo from "../assets/images/logo.png";

const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ProfileOptions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleSeeProfile = () => {
    history.push("/account-settings");
    handleClose();
  };

  const handleHelpCentre = () => {
    handleClose();
  };

  const handleAbout = () => {
    handleClose();
  };

  const handleLogOut = () => {
    //here you would update the dispatch
    dispatch(logout());
    //handleClose();
  };

  const options = [
    { name: "See Your Profile", handler: handleSeeProfile },
    { name: "Help Centre", handler: handleHelpCentre },
    { name: "About iContribute", handler: handleAbout },
    { name: "Log Out", handler: handleLogOut },
  ];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <ToolButton
        onClick={
          //handleOnClick("/account-settings");
          handleClick
        }
      >
        <svg
          width="50"
          height="47"
          viewBox="0 0 43 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6941 10.3712C26.6941 12.8777 24.6556 14.9162 22.149 14.9162C19.6425 14.9162 17.604 12.8777 17.604 10.3712C17.604 7.86461 19.6425 5.82617 22.149 5.82617C24.6556 5.82617 26.6941 7.86461 26.6941 10.3712ZM30.1028 25.1424C30.1028 25.7696 29.5949 26.2787 28.9666 26.2787H15.3316C14.7032 26.2787 14.1953 25.7696 14.1953 25.1424C14.1953 20.7565 17.7643 17.1887 22.1491 17.1887C26.5339 17.1887 30.1028 20.7565 30.1028 25.1424Z"
            fill="#FEFEFF"
          />
          <path
            d="M0.994 48V38.2H4.424C5.18933 38.2 5.824 38.3307 6.328 38.592C6.832 38.844 7.20533 39.194 7.448 39.642C7.7 40.0807 7.826 40.58 7.826 41.14C7.826 41.672 7.70467 42.162 7.462 42.61C7.22867 43.0487 6.86 43.3987 6.356 43.66C5.852 43.9213 5.208 44.052 4.424 44.052H2.478V48H0.994ZM2.478 42.834H4.354C5.054 42.834 5.55333 42.6847 5.852 42.386C6.16 42.078 6.314 41.6627 6.314 41.14C6.314 40.5987 6.16 40.1787 5.852 39.88C5.55333 39.572 5.054 39.418 4.354 39.418H2.478V42.834ZM9.23683 48V41.056H10.5668L10.6928 42.372C10.9355 41.9147 11.2715 41.5553 11.7008 41.294C12.1395 41.0233 12.6668 40.888 13.2828 40.888V42.442H12.8768C12.4662 42.442 12.0975 42.512 11.7708 42.652C11.4535 42.7827 11.1968 43.0113 11.0008 43.338C10.8142 43.6553 10.7208 44.0987 10.7208 44.668V48H9.23683ZM17.6118 48.168C16.9491 48.168 16.3518 48.0187 15.8198 47.72C15.2971 47.412 14.8818 46.9873 14.5738 46.446C14.2658 45.8953 14.1118 45.256 14.1118 44.528C14.1118 43.8 14.2658 43.1653 14.5738 42.624C14.8911 42.0733 15.3158 41.6487 15.8478 41.35C16.3798 41.042 16.9724 40.888 17.6258 40.888C18.2884 40.888 18.8811 41.042 19.4038 41.35C19.9358 41.6487 20.3558 42.0733 20.6638 42.624C20.9811 43.1653 21.1398 43.8 21.1398 44.528C21.1398 45.256 20.9811 45.8953 20.6638 46.446C20.3558 46.9873 19.9358 47.412 19.4038 47.72C18.8718 48.0187 18.2744 48.168 17.6118 48.168ZM17.6118 46.894C17.9664 46.894 18.2931 46.8053 18.5918 46.628C18.8998 46.4507 19.1471 46.1893 19.3338 45.844C19.5204 45.4893 19.6138 45.0507 19.6138 44.528C19.6138 44.0053 19.5204 43.5713 19.3338 43.226C19.1564 42.8713 18.9138 42.6053 18.6058 42.428C18.3071 42.2507 17.9804 42.162 17.6258 42.162C17.2711 42.162 16.9398 42.2507 16.6318 42.428C16.3331 42.6053 16.0904 42.8713 15.9038 43.226C15.7171 43.5713 15.6238 44.0053 15.6238 44.528C15.6238 45.0507 15.7171 45.4893 15.9038 45.844C16.0904 46.1893 16.3331 46.4507 16.6318 46.628C16.9304 46.8053 17.2571 46.894 17.6118 46.894ZM23.0946 48V42.302H22.1006V41.056H23.0946V40.048C23.0946 39.292 23.2813 38.7507 23.6546 38.424C24.0373 38.088 24.574 37.92 25.2646 37.92H25.9926V39.18H25.4886C25.162 39.18 24.9286 39.25 24.7886 39.39C24.6486 39.5207 24.5786 39.7447 24.5786 40.062V41.056H28.9746V48H27.4906V42.302H24.5786V48H23.0946ZM28.2466 39.894C27.9666 39.894 27.7333 39.81 27.5466 39.642C27.3693 39.4647 27.2806 39.2407 27.2806 38.97C27.2806 38.7087 27.3693 38.494 27.5466 38.326C27.7333 38.158 27.9666 38.074 28.2466 38.074C28.5266 38.074 28.7553 38.158 28.9326 38.326C29.1193 38.494 29.2126 38.7087 29.2126 38.97C29.2126 39.2407 29.1193 39.4647 28.9326 39.642C28.7553 39.81 28.5266 39.894 28.2466 39.894ZM30.9478 48V37.92H32.4318V48H30.9478ZM37.559 48.168C36.8777 48.168 36.271 48.0187 35.739 47.72C35.2164 47.412 34.8057 46.9873 34.507 46.446C34.2084 45.9047 34.059 45.2747 34.059 44.556C34.059 43.828 34.2037 43.1887 34.493 42.638C34.7917 42.0873 35.2024 41.658 35.725 41.35C36.257 41.042 36.873 40.888 37.573 40.888C38.2544 40.888 38.847 41.042 39.351 41.35C39.855 41.6487 40.247 42.05 40.527 42.554C40.807 43.058 40.947 43.6133 40.947 44.22C40.947 44.3133 40.9424 44.416 40.933 44.528C40.933 44.6307 40.9284 44.7473 40.919 44.878H35.515C35.5617 45.55 35.781 46.0633 36.173 46.418C36.5744 46.7633 37.0364 46.936 37.559 46.936C37.979 46.936 38.329 46.8427 38.609 46.656C38.8984 46.46 39.113 46.1987 39.253 45.872H40.737C40.5504 46.5253 40.177 47.0713 39.617 47.51C39.0664 47.9487 38.3804 48.168 37.559 48.168ZM37.559 42.106C37.0644 42.106 36.6257 42.2553 36.243 42.554C35.8604 42.8433 35.627 43.282 35.543 43.87H39.463C39.435 43.3287 39.2437 42.8993 38.889 42.582C38.5344 42.2647 38.091 42.106 37.559 42.106Z"
            fill="white"
          />
          <circle
            cx="22.1023"
            cy="16.2312"
            r="15.2312"
            stroke="#FEFEFF"
            strokeWidth="2"
          />
        </svg>
      </ToolButton>

      <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MenuItem onClick={handleSeeProfile}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt="logo"
                style={{ height: "68px", width: "68px" }}
                src={smallLogo}
              />
              <div style={{ display: "flex", flexDirection: "column", marginLeft: '8px' }}>
                iContribute
                <label>
                  See your profile
                </label>
              </div>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleHelpCentre}>
            <Help style={{ marginRight: "8px" }} />
            Help Centre
          </MenuItem>
          <MenuItem onClick={handleAbout}>
            <Info style={{ marginRight: "8px" }} />
            About iContribute
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
            <ExitToApp style={{ marginRight: "8px" }} />
            Log Out
          </MenuItem>
        </div>
      </Menu>
    </StyledHeader>
  );
};

const StyledMoreOptions = styled.div`
  padding: 0%;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  background-color: #2836d1;
  width: 100%;
  height: 65px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  z-index: 1000;
`;

export const HeaderOnePopUp = styled.h1`
  font-family: Source Sans Pro;
  font-weight: bold;
  text-align: left;
  color: #2836d1;
  text-align: center;
`;

export const HeaderThree = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  color: #192226;
`;

const ToolButton = styled.button`
  margin-right: 12px;
  margin-left: 12px;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default ProfileOptions;
