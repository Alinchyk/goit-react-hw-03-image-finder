import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

   componentDidUpdate(prevProps, prevState) {
  }

  handleSubmit = query => {
    this.setState({ query: query, images: [], page: 1 });
  };

  render() {
    const { images} = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

