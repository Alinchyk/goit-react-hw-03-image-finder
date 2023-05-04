import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import fetchImages from './servise/serviseApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page)
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
      .catch(error => {
  console.log('Error fetching images:', error);
});

    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images} = this.state;

    return (
       <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && (
        <Button onClick={this.handleLoadMore} page={1} />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
