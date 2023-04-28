import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searchbar";


export class App extends Component {
   state = {
    searchQuery: '',
  };

    componentDidUpdate(prevProps, prevState) {
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
    console.log(searchQuery);
  }
  
  render() {

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
      </div>
    )

  }
};
