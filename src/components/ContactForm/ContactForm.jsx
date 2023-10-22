// import { Btn, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContacts = {
      name: name.value,
      number: number.value,
    };
    if (name.value.trim() === '' || number.value.trim() === '') {
      return toast.warning('Please write First name Last name and number');
    }
    const isDoubleName = contacts.find(el => el.name === name.value);
    if (isDoubleName) {
      return toast.warning(`${name.value} is already in contacts`);
    }
    dispatch(addContacts(newContacts))
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder='First name Last name'
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder='123-45-67'
          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    </>
  );
};
