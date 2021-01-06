import './App.css';
import React from 'react';
import Header from './components/Header'
import Book from './components/Book'
import Footer from './components/Footer'

class App extends React.Component {
 
  render() {
    const book1 = {
      'title':"The Power of Now",
      'image':"https://images-na.ssl-images-amazon.com/images/I/41TBQfuHHCL._SX343_BO1,204,203,200_.jpg",
      'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
    const book2 = {
      'title':"The Alchemist",
      'image':"https://www.daimanuel.com/wp-content/uploads/2016/05/the-alchemist-book-cover.jpg",
      'description':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
      return (
        <div className="App">
          <Header />
          <Book book={book1}/>
          <Book book={book2}/>
          <Footer />
        </div>
        
      );

  }
}

export default App;
