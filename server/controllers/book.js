const Book = require('../models/book');


exports.getBooks = (req, res) => {
  Book.find({}, (err, allBooks) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(allBooks);
  })
}

exports.saveBook = (req, res) => {
  const bookData = req.body;
  const book = new Book(bookData);

  book.save((err, createdBook) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdBook);
  });
}

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;

  Book.findById(bookId, (err, foundBook) => {
    if (err) {
      return res.status(422).send(err);
    }

    foundBook.set(bookData);
    foundBook.save((err, savedBook) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(foundBook);
    });
  })
}

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;

  Book.deleteOne({_id: bookId}, (err, deletedBook) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json({status: 'DELETED'});
  })
}









