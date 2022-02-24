import styled from "styled-components";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props: any) {
return <MuiAlert elevation={6} 
                 variant="filled" {...props} />;
}

const AlertComponent = ({ onClick, text }: any) => {
    return (
    <div style={{justifyContent: "flex-start", marginTop: 10 }}>
        <h3>Because we are working with students, the iContribute team would like to verify your organization.</h3> 
        <h3>As an additional security measure, we would like to schedule a brief chat with you.</h3>
        <h3>Please contact us at icontribute.founder@gmail.com</h3>
    </div>
    )
};

export default AlertComponent;

const HeaderFour = styled.h3`
  font-family: Source Sans Pro;
  text-align: left";
  margin-bottom: 5px;
`;
