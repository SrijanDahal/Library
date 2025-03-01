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
const card = document.querySelector('.cardOfBooks');
const bookinLibrary = document.querySelector('.booksinLibrary');
const listOfBooks = document.querySelector('.listOfBooks'); 

const mylibrary = [];

function Book(title, author, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status;

    this.info = function() {
        return `${title} by ${author} of ${genre}.`;
    }
}

function add() {
    if(form.style.display === 'none' || form.style.display === ''){
        form.style.display = 'block';
    }
    else if(form.style.display === 'block'){
        form.style.display = 'none';
    }
}



let newBook1 = new Book('The Alchemist', 'Paulo Coelho', 'Fiction', 'Read');
mylibrary.push(newBook1.info());
let newBook2 = new Book('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 'Self-help', 'To Read');
mylibrary.push(newBook2.info());
let newBook3 = new Book('The 48 Laws of Power', 'Robert Greene', 'Self-help', 'Read');
mylibrary.push(newBook3.info());
let newBook4 = new Book('The Art of War', 'Sun Tzu', 'Self-help', 'To Read');
mylibrary.push(newBook4.info());
let newBook5 = new Book('The Power of Now', 'Eckhart Tolle', 'Self-help', 'Read');
mylibrary.push(newBook5.info());
let newBook6 = new Book('The 7 Habits of Highly Effective People', 'Stephen Covey', 'Self-help', 'To Read');
mylibrary.push(newBook6.info());


for(let i = 0; i < mylibrary.length; i++){
    const div = document.createElement('div');
    div.classList.add('card');
    const read = document.createElement('button');
    const remove = document.createElement('button');
    read.classList.add('read');
    remove.classList.add('remove');
    read.textContent = 'Read';
    remove.textContent = 'Remove';
    div.innerHTML = mylibrary[i];
    listOfBooks.appendChild(div);
    div.appendChild(read);
    div.appendChild(remove);
}


function displayBooks() {
    if(bookinLibrary.style.display === 'block'){
        bookinLibrary.style.display = 'none';
    }
    else if (bookinLibrary.style.display === 'none' || bookinLibrary.style.display === ''){
        bookinLibrary.style.display = 'block';
    }
}
