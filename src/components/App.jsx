import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import fetchImages from './servise/serviseApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Spinner from './Loader/Loader';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    modalImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(query, page)
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoading: false,
          }))
        )
        .catch(error => {
          console.log('Error fetching images:', error);
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      isLoading: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

    toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: {
        src,
        alt,
      },
    }));
  };

  render() {
    const { images, isLoading, showModal, modalImg } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading ? (
          <Spinner />
        ) : (
          <ImageGallery images={images} handleModalImg={this.toggleModal} />
        )}
        {!isLoading && images.length > 0 && (
        <Button onClick={this.handleLoadMore} page={1} />)}
        {showModal && (
          <Modal modalImg={modalImg} onClose={this.toggleModal} />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
