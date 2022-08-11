// user interface
const librarySection = document.querySelector('.book-container')
const addBookForm = document.querySelector('#addBookForm')


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
        this.books.push(newBook)
    }
}

const library = new Library()

const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
        createBookCard(book)
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

    // const bookTitleText = document.createTextNode(book.title);
    // const bookAuthorText = document.createTextNode(book.author);
    // const bookPagesText = document.createTextNode(book.num_pages);
    // const bookReadText = document.createTextNode(book.read);

    // bookTitle.appendChild(bookTitleText);
    // bookAuthor.appendChild(bookAuthorText);
    // bookPages.appendChild(bookPagesText);
    // bookRead.appendChild(bookReadText);

    librarySection.append(card)

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
};



function getInputValues() {
    const author = document.querySelector('#author')
    console.log("Author: ", author.addEventListener('change', (e)=>{
        console.log(e.target.value)
    }));
    const num_pages = document.querySelector('#pages').value
    const title = document.querySelector('#title').value
    const read = document.querySelector('#read').checked
    return new Book(author, num_pages, title, read)
};

const addBook = (e) => {
    e.preventDefault()
    const newBook = getInputValues()
}
