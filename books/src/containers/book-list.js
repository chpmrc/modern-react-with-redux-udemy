import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook, clearSelectedBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            className="list-group-item"
            onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.clearSelectedBook()}>Clear</button>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook, clearSelectedBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);