function bookinfo(title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
    this.bookinfo = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readOrNot + "."}`;
    }
}

const thehobbit = new bookinfo('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
console.log(thehobbit.bookinfo());

