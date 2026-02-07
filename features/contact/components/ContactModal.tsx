import Modal from "../../../components/ui/Modal";
import ContactForm from "./ContactForm";

export default function ContactModal() {
  return (
    <Modal buttonText="contact me">
      <ContactForm />
    </Modal>
  );
}
