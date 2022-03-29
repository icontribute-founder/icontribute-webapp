
import FAQAccordion from "./FAQAccordian";
import  { useState } from 'react';

const FAQBlock = () => {
    const [idxOfOpenedAccordion, setIdxOfOpenedAccordion] = useState(-1); 
    const faqs = [
        {
          question: "Is iContribute Free?",
          answer:
            "Yes, iContribute is a completely free platform for both students and organizations.",
        },
        {
          question: "Where does iContribute get its funding?",
          answer:
            "We primarily charge educational institutions as our primary source of revenue. We recently finished a paid 2000-student pilot with the OCDSB and are looking to expand to other high schools in and outside of our local school board.",
        },
        {
          question: "Who can volunteer through iContribute?",
          answer:
            "Anyone over the age of 13 can volunteer through iContribute. We primarily target high school students but our app is welcome to all ages.",
        },
        {
          question: "Our opportunities are better suited for individuals 18 or older, can we still post our opportunities?",
          answer:
            "Yes. Although we primarily target high school students, our app is welcome to all ages and we have users Who are university/college students as well.",
        },
        {
          question: "Where are iContribute's volunteer opportunities located?",
          answer:
            "We are currently focusing our efforts on the Ottawa community because that is where the co—founding team began their journey. We also in the early stages of expanding within the Toronto and GTA area but are still focused on Ottawa.",
        },
        {
          question: "How have we adopted our business model during COVID—19?",
          answer:
            "In response to COVID-19, the iContribute team has rolled out the option for organizations to post virtual opportunities, so that users can volunteer from the comfort of their home.",
        },
        {
          question: "Can I post the volunteer opportunities myself?",
          answer:
            "Yes, once you create an account and we verify the account email, you have the option to direct volunteer applicants to your website or email.",
        },
        {
          question: "Does iContribute offer volunteer positions that are ongoing?",
          answer:
            "Yes, iContribute offers both one-time and ongoing volunteer opportunities. We have many students that are interested in pursuing longer term commitments.",
        },
        {
          question: "Do you collect applicant demographics?",
          answer:
            "iContribute collects minimal personal information, including first names, email addresses and an optional location, so that users are not personally identifiable. We do not collect any demographic information (age, ethnicity, race, sexual orientation), and do not plan to do so in the future.",
        },
        {
          question: "Can we (organizations) manage applications through the app itself?",
          answer:
            "At this time, iContribute's core features for organizations includes creating in-person and virtual volunteering opportunities. We do not currently offer volunteer application management features, but may consider doing so in the near future.",
        },
        {
          question: "How can volunteers apply to our volunteer opportunities?",
          answer:
            "As our app acts as a virtual bulletin board, after student users discover an opportunity on our app, they are either auto-drafted an email to send to the organization, or are redirected to the organization's preferred website. Thus, a majority of the volunteer application process also currently happens off of our app.",
        },
        {
          question: "How do we manage personal information on our app?",
          answer:
            "We securely store personal information through Google's Firebase Firestore.",
        },
      ];
    const faqAccordions = faqs.map((item, idx) => {
    return (
      <FAQAccordion
        key={idx}
        idx={idx}
        isOpen={idx === idxOfOpenedAccordion}
        setIdxOfOpenedAccordion={setIdxOfOpenedAccordion}
        title={item.question}
        cont={item.answer}
      />
    );
  });

    
  
  return (
    <>
    <div style={{marginBottom: "20px"}}></div>
      {faqAccordions}
      <div style={{marginBottom: "60px"}}></div>
    </>
  );
};

export default FAQBlock;
