import react from 'react';
import {BsThreeDotsVertical} from "react-icons/bs";
import {Paper, Grid} from "@material-ui/core"
import Pfp from "../assets/images/notifPfp"


const Notifications = () => {
    
    return (

        <div style = {div}> 


        <div style = {boxGray}>

            <h1 style = {h1}> Notifications </h1>   


            <BsThreeDotsVertical style = {icon2}></BsThreeDotsVertical>
            

        </div>

        <h2 style = {h2}>New Notifications</h2>

        <Paper style = {boxBlue}>

            <div  ><Pfp ></Pfp></div>

            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>

            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>

        </Paper>

        <br></br>
        
        <Paper style = {boxBlue}>

            <div  ><Pfp ></Pfp></div>

            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>

            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>
            
        </Paper>

        <h2 style = {h2}>Old Notifications</h2>

        <Paper style = {box}>

            <div  ><Pfp ></Pfp></div>
            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>

        </Paper>

        <br></br>
        
        <Paper style = {box}>

            <div  ><Pfp ></Pfp></div>
            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>
            
        </Paper>

        <br></br>

        <Paper style = {box}>

            <div  ><Pfp ></Pfp></div>
            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>

        </Paper>

        <br></br>
        
        <Paper style = {box}>

            <div  ><Pfp ></Pfp></div>
            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <BsThreeDotsVertical style = {icon} ></BsThreeDotsVertical>
            
        </Paper>

        <br></br>

        <Paper style = {box}>

            <div  ><Pfp ></Pfp></div>
            <h3 style = {h3}><b>Congratulations!</b> Jordan has applied for Relay for Life Volunteer position. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            <BsThreeDotsVertical style = {icon}></BsThreeDotsVertical>

        </Paper>

        <br></br>

        </div>



    )
}


const div: React.CSSProperties = {

}
const box: React.CSSProperties = {
    padding: "15px",
    display : "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%",
    
}
const boxGray: React.CSSProperties = {
    display : "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid silver",
    
}
const boxBlue: React.CSSProperties = {
    padding: "15px",
    backgroundColor: "#EDECFF",
    display : "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "5%",
    marginRight: "5%",
}
const h1: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
    textAlign: "left",
    marginLeft: "5%",
    marginRight: "5%",
}
const h2: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
    marginLeft: "5%",
    marginRight: "5%",
}
const h3: React.CSSProperties = {
    fontFamily: "Source Sans Pro",
    marginLeft: "15px",
    marginRight: "30px",
    fontSize: "15px",
    fontWeight: "normal",
}
const icon: React.CSSProperties = {
    cursor: "pointer",
    width: "35px",
}
const icon2: React.CSSProperties = {
    cursor: "pointer",
    width: "35px",
    marginRight: "5%",
}

export default Notifications;