import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.module.css';

class ContactForm extends Component {
  render() {
    return (
      <form>
        <label>
          Insert contact name
          <input type="text" name="nameInput" />
        </label>

        <label>
          Insert contact number
          <input type="text" name="phoneInput" />
        </label>

        <button type="submit" onClick={this.props.addContact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
