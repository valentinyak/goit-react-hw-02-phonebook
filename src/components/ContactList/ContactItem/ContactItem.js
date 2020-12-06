import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const { contact, onClick } = this.props;

    return (
      <span>
        {contact.name}: {contact.number}{' '}
        <button className={s.deletBtn} id={contact.id} onClick={onClick}>
          delete
        </button>
      </span>
    );
  }
}

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};
