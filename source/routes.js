const {
  handlerAddBooks, handlerGetBookWithId, handlerEditBookWithid,
  handlerDeleteBookWithid,
  handlerGetAllBooks,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handlerAddBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handlerGetAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handlerGetBookWithId,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handlerEditBookWithid,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handlerDeleteBookWithid,
  },
];

module.exports = routes;
