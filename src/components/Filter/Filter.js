import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <label>
        Find contact
        <input type="text" name="filterInput" onChange={this.props.onChange} />
      </label>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};
