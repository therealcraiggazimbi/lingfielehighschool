import styles from "../styles/Contact.module.css";
import ContactHeader from "../components/ContactHeader";
import Location from "../components/Location";
import ContactBody from "../components/ContactBody";

const Contact = () => {
  return (
    <>
      <Location home="Home" page="Get In Touch" subpage="Contact" />
      <ContactHeader />
      <ContactBody />
    </>
  );
};

export default Contact;
