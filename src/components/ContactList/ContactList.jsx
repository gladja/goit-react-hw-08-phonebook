// import { AiFillDelete } from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getAllContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
    toast.info('Contact removed!');
  };

  const contactsFilterResult = contacts?.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      {contactsFilterResult && !isLoading && contactsFilterResult.map(({ id, name, number }) => (
        <div key={id}>
          <div>{name}</div>
          <div>
            <div> {number}</div>
            <button
              onClick={() => handleDelete(id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};
