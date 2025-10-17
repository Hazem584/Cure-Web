import React from "react";
import {
     Accordion,
     AccordionHeader,
     AccordionBody,
} from "@material-tailwind/react";
import { FiPlus } from "react-icons/fi";
export default function FaqsAccordion() {
     const [open, setOpen] = React.useState(0);

     const handleOpen = (value) => setOpen(open === value ? 0 : value);
     const faqs = [
          {
               id: 1,
               question: "What is this app used for?",
               answer: "This app helps users manage their appointments, connect with doctors, and access healthcare information easily from anywhere.",
          },
          {
               id: 2,
               question: "Is the app free to use?",
               answer: "Yes, the app is completely free to download and use. Some premium features may require a subscription in the future.",
          },
          {
               id: 3,
               question: "How can I find a doctor?",
               answer: "You can browse doctors by specialty or location through the search feature and book an appointment instantly.",
          },
          {
               id: 4,
               question: "Can I cancel my appointment?",
               answer: "Yes, appointments can be canceled or rescheduled up to 24 hours before the scheduled time directly from the app.",
          },
          {
               id: 5,
               question: "What payment are supported?",
               answer: "We currently support payments via credit card, debit card, and PayPal. More options will be added soon.",
          },
          {
               id: 6,
               question: "How do I edit my profile?",
               answer: "Go to the Profile section from the main menu, then tap 'Edit Profile' to update your personal information.",
          },
     ];
     function Icon({ id, open }) {
          return <FiPlus />;
     }
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
     return (
          <div>
               {faqs.map(({ id, question, answer }) => {
                    return (
                         <div key={id}>
                              <Accordion
                                   open={open === id}
                                   icon={<Icon id={id} open={open} />}
                                   animate={CUSTOM_ANIMATION}
                                   className="!font-[georgia] border-b-0"
                              >
                                   <AccordionHeader
                                        onClick={() => handleOpen(id)}
                                        className="!font-[georgia] font-normal text-secondry border-b-0"
                                   >
                                        {question}
                                   </AccordionHeader>
                                   <AccordionBody>{answer}</AccordionBody>
                              </Accordion>
                         </div>
                    );
               })}
          </div>
     );
}
