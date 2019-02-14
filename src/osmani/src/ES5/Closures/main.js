var Book = require('./Book');

var myBook = Book.make('12313', 'Le Petit Prince', 'PPages');
var myOtherBook = Book.make('324', '1984', 'George Orwell');

console.log(myBook.getDescription());
console.log(myOtherBook.getDescription());
console.log(myBook.getNumOfBooks());