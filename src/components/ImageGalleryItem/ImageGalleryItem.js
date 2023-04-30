import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = webformatURL => (
  <li>
    <img src={webformatURL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
