import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';
import { animateScroll as scroll } from 'react-scroll';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  scrollPageOnBtnMore = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <LoadMoreBtn onClick={this.scrollPageOnBtnMore} type="button">
        Load more
      </LoadMoreBtn>
    );
  }
}
