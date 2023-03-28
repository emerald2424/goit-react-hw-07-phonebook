import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filterContacts = () => {
    const searchedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchedName)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
        ></ContactListItem>
      ))}
    </List>
  );
} 
