import { useHistory } from "react-router";
import Button from "../components/common/Button";
import SignUpImage from "../assets/images/signup-image.png";

const Dashboard = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };
    return (
        <div>
            <div style={boxGray}>
                <h1 style={h1}> Your organization dashboard </h1>
            </div>

            <div style={outerLayout}>
                <div style={leftBoxLayout}>
                    <h3 style={h3}>You have not created any opportunities. When you do, they will show up on this page.</h3>
                    <br/>
                    <Button onClick={handleOnClick}>Create my first opportunity</Button>
                </div>

                <div>
                    <img src={SignUpImage} alt="SignUpImage" />
                </div>
            </div>

        </div>
    );
};

const h1: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
    textAlign: "left",
    marginTop: "0%",
    marginBottom: "2%",
    marginLeft: "5%",
    marginRight: "5%",
};
const h3: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
    marginTop: "10%",
    marginBottom: "5%",
    marginLeft: "0%",
    marginRight: "0%",
};
const boxGray: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid silver",
};
const outerLayout: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
};
const leftBoxLayout: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginLeft: "5%",
    marginTop: "5%"
};

export default Dashboard;
