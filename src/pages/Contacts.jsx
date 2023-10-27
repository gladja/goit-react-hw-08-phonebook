import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactFilter } from '../components/ContactFilter/ContactFilter';

const Contacts = () => {
  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default Contacts;
