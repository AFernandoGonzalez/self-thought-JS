// user interface
const librarySection = document.querySelector('.book-container')
const addBookForm = document.querySelector('#addBookForm')
const errorMsg = document.querySelector('#errorMsg')

class Book {
    // constructor
    constructor(author, num_pages, title, isRead) {
        this.author = author
        this.num_pages = num_pages
        this.title = title
        this.isRead = isRead
    }
}

class Library {
    constructor() {
        this.books = []
    }
    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const library = new Library()

const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
        createBook(book)
        // console.log(createBook("createBook: ", book));
    }
}

const resetBooksGrid = () => {
    librarySection.innerHTML = '';
}

const createBook = (book) => {
    const card = document.createElement('div')
    const bookTitle = document.createElement('h1');
    const bookAuthor = document.createElement('h3');
    const bookPages = document.createElement('span');
    const bookRead = document.createElement('span');

    card.classList.add('card');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookRead.classList.add('book-read');

    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = `${book.num_pages} pages`

    if (book.isRead) {
        bookRead.textContent = 'Read'
    } else {
        bookRead.textContent = 'Not Read'
    }

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    librarySection.append(card)
};

function getInputValues() {
    const author = document.querySelector('#author').value
    const num_pages = document.querySelector('#pages').value
    const title = document.querySelector('#title').value
    const isRead = document.querySelector('#read').checked
    console.log('author: ', author);
    console.log('num_pages: ', num_pages);
    console.log('title: ', title);
    console.log('read: ', isRead);
    return new Book(author, num_pages, title, isRead)
};

const addBook = (e) => {
    e.preventDefault()
    const newBook = getInputValues()

    if (library.isInLibrary(newBook)) {
        errorMsg.textContent = 'This book already exists in your library'
        errorMsg.classList.add('active')
        return
    }

    library.addBook(newBook)
    updateBooksGrid()

    console.log("library.books: ", library.books);
}

addBookForm.onsubmit = addBook
