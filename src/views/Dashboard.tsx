import { useHistory } from "react-router";
import BlueButton from "../components/Buttons/StaticButton";

const Dashboard = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };
    return (
        <div>
            <BlueButton
                onClick={handleOnClick}
                text="Create a new opportunity"
            />
        </div>
    );
};

export default Dashboard;
