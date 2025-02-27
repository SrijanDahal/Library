const btnADD = document.querySelector('.Add');
const btnRemove = document.querySelector('.Removed');
const btnRead = document.querySelector('.Read');
const btnToRead = document.querySelector('.ToRead');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');
const inputTitle = document.querySelector('#bookname');
const inputAuthor = document.querySelector('#author');
const inputGenre = document.querySelector('#genre');
const inputStatus = document.querySelector('#status');

const mylibrary = [
];

function book(title, author, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status;
    return `${this.title} by ${this.author} is a ${this.genre} book and it is ${this.status}`;
}

function addOrRemove() {
    if(form.style.display === 'none' || form.style.display === ''){
        form.style.display = 'block';
    }
}

function submitForm() {
    if(form.style.display === 'block'){
        form.style.display = 'none';
    }
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let genre = inputGenre.value;
    let status = inputStatus.value;
    let newBook = new book(title, author, genre, status);
    mylibrary.push(newBook);
}

function displayBooks() {
    console.log(mylibrary);
}

