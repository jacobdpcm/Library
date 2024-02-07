function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

Book.prototype.info = function(){
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + read;
}

const newBook = document.querySelector('.new');
const form = document.querySelector('form');
newBook.addEventListener('click', () => form.classList.toggle('hidden'))
