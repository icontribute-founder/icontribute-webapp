import styled from "styled-components";
import InputField from "../FormElements/InputField";
import TextareaField from "../FormElements/TextareaField";
import { useState } from "react";
import TikTokIcon from "../../assets/images/contacticon-tiktok.svg";
import FacebookIcon from "../../assets/images/contacticon-facebook.svg";
import InstagramIcon from "../../assets/images/contacticon-instagram.svg";
import LinkedinIcon from "../../assets/images/contacticon-linkedin.svg";
import EmailIcon from "../../assets/images/envelope-solid.svg";
import Label from "../FormElements/Label";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";


init("user_sezjNKeAo3Iqife7tGsUG");

interface ContactDetails {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [errorState, setErrorState] = useState(false);
  
  


  const handleInputOnChange = (event: any) => {   
    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleEmailSend = (event: any) => {
    setErrorState(false);   
    event.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (contactDetails.fullName !== "" && contactDetails.email !== "" && contactDetails.subject !== "" && contactDetails.message !== "") {
      if (re.test(String(contactDetails.email).toLowerCase())) {
        emailjs.send(
          "service_ns1tlzd",
          "template_iuest3i",
          {
            subject: contactDetails.fullName + " - " + contactDetails.subject,
            message: contactDetails.message,
            name: contactDetails.fullName,
            email: contactDetails.email,
          },
          "user_sezjNKeAo3Iqife7tGsUG"
        );
        setContactDetails({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
        setButtonText("Sent!");
        setErrorState(false);
      }
    }
    else{
      setErrorState(true);
    }
  };

  const handleTest = (event: any) => {   

    event.preventDefault();
    alert("Hi");
    setContactDetails({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setButtonText("Sent!");
  };
  
  return (
    <>
    <MainContainer>
      <table style={{width: "100%"}}>
        <tr>
        <td style={{width: "40%"}}>
          <div>         
          <form className="contactForm" onSubmit={handleEmailSend}>
          
          
          <InputField

            label="Full Name"
            type="text"
            id="fullName"
            placeholder="Full Name"
            name="fullName"
            onChange={handleInputOnChange}
            value={contactDetails.fullName}
          />

          <InputField

          label="Email Address"
          type="text"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleInputOnChange}
          value={contactDetails.email}
          />

          <InputField

          label="Subject"
          type="text"
          id="subject"
          placeholder="Subject"
          name="subject"
          onChange={handleInputOnChange}
          value={contactDetails.subject}
          />

          <TextareaField

          label="Message"
          type="text"
          id="message"
          placeholder="Type your message here"
          name="message"
          onChange={handleInputOnChange}
          value={contactDetails.message}
          rows="7"
          />


        <div style={{marginBottom: "35px"}}></div>
        <ErrorMessage>{ errorState ? "Email could not be sent as one or more fields are invalid": null }</ErrorMessage>
        <StyledButton disabled={buttonText=="Sent!"} onClick={handleEmailSend}>{buttonText}</StyledButton>
        </form>
        </div>
      </td>
      <td style={{verticalAlign: "bottom"}}>
        <LargerContainer>
        
        <ContactDetailsContainer>  
          <table>  
            <tr>  
              <td style={{verticalAlign: "top"}}>
        <HeaderOne>
          <img src={EmailIcon} alt="Email" height="25px" width="25px" style={{marginRight: "8px"}} />
          </HeaderOne>
          </td>
          <td>
          <HeaderOne>
            Email Us
          </HeaderOne>
          
          iContribute@gmail.com
          <div style={{marginBottom: "32px"}}></div>
          <hr style={{width: "50%", marginLeft: "0"}}></hr>
          <div style={{marginBottom: "32px"}}></div>
          <a href="https://www.linkedin.com/company/icontribute/">
          <img src={LinkedinIcon} alt="LinkedIn" height="25px" width="25px" style={{marginRight: "16px"}} />
          </a>
          <a href="https://www.facebook.com/icontribute.community/">
          <img src={FacebookIcon} alt="Facebook" height="25px" width="25px" style={{marginRight: "16px"}} />
          </a>
          <a href="https://www.instagram.com/icontribute.community/">
          <img src={InstagramIcon} alt="Instagram" height="25px" width="25px" style={{marginRight: "16px"}} />
          </a>
          <a href="https://www.tiktok.com/@icontribute">
          <img src={TikTokIcon} alt="TikTok" height="25px" width="25px" style={{marginRight: "16px"}} />
          </a>
          </td>
          </tr>
          
          </table>  
        </ContactDetailsContainer>
        </LargerContainer>
      </td>
      </tr>
      </table>
        
    </MainContainer>

    </>
  );
};

export default ContactUs;

const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 5%;
  margin-left: 24px;
  text-align: left;
`;

const LeftContainer = styled.div`

`;


const LargerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const ContactDetailsContainer = styled.div`
text-align: left;
margin-right: 10%;
width: 60%;
font-family: Source Sans Pro;
`;


const HeaderOne = styled.h1`
  font-family: Source Sans Pro;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
    background-color: #2836d1;
    padding: 6px 15px;
    color: #fbfbfb;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    width: 50%;
    height: 50px;
`;

const StyledInput = styled.input`
    width: 100%;
    
    border: 1px solid #BABCBD;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px 20px;
    font-style: normal;
    font-family: Source Sans Pro;
    font-size: 16px;
    ::placeholder {
        color: #cdcdcd;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px #2836D1;

    }
    margin-top: 8px;
    margin-bottom: 24px;
`;


const StyledLabel = styled.label`
font-size: 16px;
margin-top: 2px;
margin-bottom: 2px;
font-family: Source Sans Pro;
color: red;
`;

const ErrorMessage = styled.div`
font-size: 15px;
margin-top: 5px;
margin-bottom: 5px;
font-family: Source Sans Pro;
color: red;
`;