module.exports = {
        make: function (newIsbn, newTitle, newAuthor) {
                return new Book(newIsbn, newTitle, newAuthor);
        }
};

//private static
var numOfBooks = 0;

//private static method
function checkIsbn(isbn) {
        return true;
}

var Book = function (newIsbn, newTitle, newAuthor) {
        numOfBooks++;

        //private attributes.
        var isbn, title, author;

        //privileged methods
        this.getIsbn = function () {
                return isbn;
        };
        this.setIsbn = function (newIsbn) {
                if (!checkIsbn(newIsbn)) {
                        throw new Error('Book: Invalid ISBN.');
                }
                isbn = newIsbn;
        };
        this.getTitle = function () {
                return title;
        };
        this.setTitle = function (newTitle) {
                title = newTitle || 'No title specified';
        };
        this.getAuthor = function () {
                return author;
        };
        this.setAuthor = function (newAuthor) {
                author = newAuthor || 'No author specified';
        };

        // Constructor code.
        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
};

Book.prototype.getDescription = function () {
        return this.getIsbn() + ' ' + this.getTitle() + ' ' + this.getAuthor();
};

Book.prototype.getNumOfBooks = function (){
        return numOfBooks;
};

Book.prototype.constructor = 'Book';