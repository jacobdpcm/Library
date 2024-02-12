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
    const nontitlespot = document.createElement('div');
    library.appendChild(bookspot);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = element.title;
    bookspot.appendChild(title);

    //Separate title from the rest for Space-between
    bookspot.appendChild(nontitlespot);

    const author = document.createElement('div');
    if(element.author === ''){
      element.author = 'N/A';
    }
    author.textContent = "By " + element.author;
    nontitlespot.appendChild(author);

    const pages = document.createElement('div');
    if(element.pages === ''){
      element.pages = 'N/A';
    }
    pages.textContent = element.pages + " Pages";
    nontitlespot.appendChild(pages);

    const read = document.createElement('div');
    read.textContent = element.read;
    nontitlespot.appendChild(read);
    
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


