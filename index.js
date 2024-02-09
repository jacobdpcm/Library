function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

Book.prototype.info = function(){
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + read;
}

function addBook(libraryArray){
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const read = document.querySelector('#read');

  const theBook = new Book(title.value, author.value, pages.value, read.value)
  libraryArray.push(theBook);
}

function updateLibrary(libraryArray){
  clearLibrary();

  console.log(library)

  libraryArray.forEach(element => {
    const library = document.querySelector('.library');
    const bookspot = document.createElement('div');
    bookspot.classList.add('example');
    library.appendChild(bookspot);

    const title = document.createElement('div');
    title.textContent = element.title;
    bookspot.appendChild(title);

    const author = document.createElement('div');
    author.textContent = "By" + element.author;
    bookspot.appendChild(author);

    const pages = document.createElement('div');
    pages.textContent = element.pages + "Pages";
    bookspot.appendChild(pages);

    const read = document.createElement('div');
    read.textContent = element.read;
    bookspot.appendChild(read);
    
  });
}

function clearLibrary(){
  const library = document.querySelector('.library');
  library.innerHTML = ''
}


let library = [];

const newButton = document.querySelector('.new');
const form = document.querySelector('form');
const confirmButton = document.querySelector('.confbut');

newButton.addEventListener('click', () => form.classList.toggle('hidden'));

confirmButton.addEventListener('click', () => {
  addBook(library);
  updateLibrary(library);
});


