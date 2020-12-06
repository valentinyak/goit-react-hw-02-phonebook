import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} onClick={onClick} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
