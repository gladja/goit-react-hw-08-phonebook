import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/contacts/selectors';

export const ContactFilter = () => {
const dispatch = useDispatch();
const filter = useSelector(selectFilter)

const contactsFilter = (e) => {
  dispatch(filterContacts(e.target.value))
};

  return (
    <div>
        <label>
          Find contacts by name
          <input
            onChange={contactsFilter}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title='Find contacts by name'
            placeholder='Write name'
            value={filter}
          />
        </label>
    </div>
  );
};
