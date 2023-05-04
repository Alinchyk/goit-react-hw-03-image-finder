import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL }) => (
  <GalleryItem>
    <Image src={webformatURL} alt="" />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
