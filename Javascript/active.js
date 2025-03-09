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
const read = document.querySelector('.read');
const remove = document.querySelector('.remove');
const removedbooks = document.querySelector('.removedbooks');

const mylibrary = [];

class book {
    constructor(title, author, genre, status) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.status = status;
    }

    add() {
        if(form.style.display === 'none' || form.style.display === ''){
            form.style.display = 'block';
        }
        else if(form.style.display === 'block'){
            form.style.display = 'none';
        }
    }

    submitForm() {

        if(this.title === '' || this.author === '' || this.genre === ''){
            alert('Please fill in all fields');
        }

        else {
            mylibrary.push(`${this.title} by ${this.author} of ${this.genre}.`);
            const div = document.createElement('div');
            div.classList.add('card');
            const read = document.createElement('button');
            const remove = document.createElement('button');
            read.classList.add('read');
            remove.classList.add('remove');

        
            // Checking the staus of the book //
            if(inputStatus.checked) {
                read.textContent = 'Read';
            }
            else {
                read.textContent = 'Unread';
            }
            
            // Adding the book to the library //
            remove.textContent = 'Remove';
            div.innerHTML = mylibrary[mylibrary.length - 1];
            listOfBooks.appendChild(div);
            div.appendChild(read);
            div.appendChild(remove);
        
    
            // color of the read button//
            if(read.textContent === 'Read'){
                read.style.backgroundColor = 'green';
            }
            else if(read.textContent === 'Unread'){
                read.style.backgroundColor = 'red';
            }
        
        
            // Displaying the form //
            if(form.style.display === 'none' || form.style.display === ''){
                form.style.display = 'block';
            }
            else if(form.style.display === 'block'){
                form.style.display = 'none';
            }
        
            // Chaning the status of the book //
            read.addEventListener('click', function() {
                if(read.textContent === 'Read'){
                    read.textContent = 'Unread';
                    read.style.backgroundColor = 'red';
                }
                else if(read.textContent === 'Unread'){
                    read.textContent = 'Read';
                    read.style.backgroundColor = 'green';
                }
            });
        
            // Removing the book from the library //
            remove.addEventListener('click', function() {
                div.style.display = 'none';
            });
        
            this.title = '';
            this.author = '';
            this.genre = '';
            inputStatus.checked = false;
        }
    }

    // Displaying the books in the library //
    displayBooks() {
        if(bookinLibrary.style.display === 'block'){
            bookinLibrary.style.display = 'none';
        }
        else if (bookinLibrary.style.display === 'none' || bookinLibrary.style.display === ''){
            bookinLibrary.style.display = 'block';
        }
    }
}





