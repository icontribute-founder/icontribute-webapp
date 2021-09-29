import { useHistory } from "react-router";
import Button from "../components/common/Button";

const Dashboard = () => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/new-opportunity");
    };
    return (
        <div>
            <Button onClick={handleOnClick}>Create a new opportunity</Button>
        </div>
    );
};

export default Dashboard;
