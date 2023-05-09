import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    modalImg: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImg } = this.props;

    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={modalImg.src} alt={modalImg.alt} />
        </ModalContainer>
      </Overlay>
    );
  }
}
