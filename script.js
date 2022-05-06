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
const inputTitle = document.getElementById('title')
const inputAuthor = document.getElementById('author')
const inputPages = document.getElementById('pages')
const inputRead = document.getElementById('read')
let delBtns = document.querySelectorAll(".del-btn")

console.log(delBtns)

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook() {
    let bookToAdd = new Book(inputTitle.value, inputAuthor.value, parseInt(inputPages.value), inputRead.checked)
    myLibrary.push(bookToAdd)
}

function loadLibrary() {
    let bookTitle = ""
    let bookAuthor = ""
    let bookPages = 0
    let bookRead = false
    let textToInject = ""

    for (let i = 0; i < myLibrary.length; i++) {
        bookTitle = myLibrary[i]["title"]
        bookAuthor = myLibrary[i]["author"]
        bookPages = myLibrary[i]["pages"]
        bookRead = myLibrary[i]["read"]

        textToInject +=
            `<tbody>
                <tr class="bookRow">
                    <td>${bookTitle}</td>
                    <td>${bookAuthor}</td>
                    <td>${bookPages}</td>
                    <td>${bookRead ? "Yes" : "No"}</td>
                </tr>
            </tbody>`
    }
    table.innerHTML = `
        <table id="table">
            <tr id="table-head">
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>
                <th>Delete</th>
            </tr>
        </table>`
    table.innerHTML += textToInject

    delBtns = document.querySelectorAll(".del-btn")
}

function deleteRow(ind) {
    myLibrary.splice(ind, 1)
    loadLibrary()
    appendDelBtns()
}

function appendDelBtns() {
    let bookRows = document.querySelectorAll(".bookRow")
    bookRows.forEach((row, index) => {
        const btn = document.createElement("button")
        btn.classList = "del-btn"
        btn.id = index
        btn.innerText = "Delete"
        row.appendChild(btn)
    })

    delBtns = document.querySelectorAll(".del-btn")
    console.log(delBtns)
    delBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log(event.target.id)
            deleteRow(event.target.id)
        })
    })
}

loadLibrary()
appendDelBtns()

submit.addEventListener('click', () => {
    addBook()
    loadLibrary()
    console.table(myLibrary)
    appendDelBtns() //Anda bien la funcion
})




