import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
// import LoginDetail from "../components1/Profile/LoginDetail";
// import ProfileSide from "../components1/Profile/ProfileSide";
// import OrganizationDetail from "../components1/Profile/OrganizationDetail";

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
`;

const ProfileContent = styled.div`
    width: auto;
    height: 100%;
    margin-top: 70px;
    margin-right: 30px;
`;

const LoginDetail = () => <div>login</div>;
const ProfileSide = () => <div>ProfileSide</div>;
const OrganizationDetail = () => <div>OrganizationDetail</div>;

const Profile = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState([
        {
            name: "Login Details",
            component: <LoginDetail />,
        },
        {
            name: "Organization Details",
            component: <OrganizationDetail />,
        },
    ]);

    return (
        <div>
            <ProfileContainer>
                <Grid container>
                    <Grid item xs={4}>
                        {/* <ProfileSide setCurrentPage={setCurrentPage} /> */}
                    </Grid>

                    <Grid item xs={8}>
                        <ProfileContent>
                            {page[currentPage].component}
                        </ProfileContent>
                    </Grid>
                </Grid>
            </ProfileContainer>
        </div>
    );
};

export default Profile;
