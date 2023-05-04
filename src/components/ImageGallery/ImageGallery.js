import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <ImageList>
    {images.map(image => (
      <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} />
    ))}
  </ImageList>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
