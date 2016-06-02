export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action.
  // An object with a type property (optional payload).
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function clearSelectedBook() {
  return {
    type: 'CLEAR_SELECTED_BOOK'
  }
}