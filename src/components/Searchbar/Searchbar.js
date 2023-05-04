import { Component } from 'react';
import PropTypes from 'prop-types';
import { SlMagnifier } from 'react-icons/sl';
import { toast } from 'react-toastify';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handlesearchQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.error('Enter the query correctly...', { theme: 'colored' });
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <SearchBar>
        <SerchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SlMagnifier /> <SerchFormBtnLabel></SerchFormBtnLabel>
          </SearchBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handlesearchQueryChange}
          />
        </SerchForm>
      </SearchBar>
    );
  }
}
