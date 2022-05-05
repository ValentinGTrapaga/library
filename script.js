let myLibrary = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 320,
        read: false
    },
    {
        title: "The subtle art of not giving a fuck",
        author: "Mark Manson",
        pages: 224,
        read: false
    },
    {
        title: "The Pragmatic Programmer",
        author: "David Thomas, Andre Hunt",
        pages: 352,
        read: false
    },
]

const submit = document.getElementById('submit-btn')
const formInputs = document.getElementById('book-form').elements
const table = document.getElementById('table')

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function checkLibrary() {
    let bookTitle = ""
    let bookAuthor = ""
    let bookPages = 0
    let bookRead = false

    for (let i = 0; i < myLibrary.length; i++) {
        bookTitle = myLibrary[i][title]
        bookAuthor = myLibrary[i][author]
        bookPages = myLibrary[i][title]
        bookRead = myLibrary[i][read]
    }
    console.log(bookTitle, bookAuthor, bookPages, bookRead)
}

checkLibrary()

submit.addEventListener('click', () => {
    checkLibrary()
})

/* function addBook() {

} */
