import './styles.css';
import React from 'react';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="type your search"
    />
  );
};

TextInput.defaultProps = {
  searchValue: '',
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
