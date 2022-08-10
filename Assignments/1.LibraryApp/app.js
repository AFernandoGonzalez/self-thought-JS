
const librarySection = document.querySelector('.book-container')

let library = [
    {
        id : 1,
        author: 'Fer',
        num_pages : 189,
        title: 'First Book',
        read : false
    },
    {
        id : 2,
        author: 'Fernando Gonzalez',
        num_pages : 989,
        title: 'Second Book',
        read : true
    },
    {
        id : 3,
        author: 'Jhon Gonzalez',
        num_pages : 989,
        title: 'Third Book',
        read : true
    }
];


function Book(id, author, num_pages, title, read) {
    // constructor
    this.id = id
    this.author = author
    this.num_pages = num_pages
    this.title = title
    this.read = read
}

function addFunctionToLibrary() {
    // do stuff here
    addBook()

}


function displayBook(books){
    books.map((book)=>{
        const card = document.createElement('div')
        card.classList.add('card');

        const bookTitle = document.createElement('h1');
        bookTitle.classList.add('book-title')
        const bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('book-author');
        const bookPages = document.createElement('span');
        bookPages.classList.add('book-pages');
        const bookRead = document.createElement('span');
        bookRead.classList.add('book-read');
        const bookId = document.createElement('span');
        bookId.classList.add('book-id');

        const bookIdText = document.createTextNode(book.id); 
        const bookTitleText = document.createTextNode(book.title); 
        const bookAuthorText = document.createTextNode(book.author); 
        const bookPagesText = document.createTextNode(book.num_pages); 
        const bookReadText = document.createTextNode(book.read); 
        
        bookId.appendChild(bookIdText);
        bookTitle.appendChild(bookTitleText);
        bookAuthor.appendChild(bookAuthorText);
        bookPages.appendChild(bookPagesText);
        bookRead.appendChild(bookReadText);
        
        librarySection.append(card)

        card.appendChild(bookId);
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
    })
}

displayBook(library)