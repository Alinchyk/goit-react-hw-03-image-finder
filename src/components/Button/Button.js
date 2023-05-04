import React from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ onClick, page }) => {
  return <LoadMoreBtn onClick={() => onClick(page)}>Load more</LoadMoreBtn>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Button;
