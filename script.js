const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelector('.btn');
const btn2= document.querySelector('.btn2');
const btn3 =document.querySelector('.btn3');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('Pages');
const read = document.getElementById('Read');
const mainContent = document.querySelector('.mainContent');
const form=document.querySelector('.form');


const clear = function(){
    title.value='';
    author.value='';
    pages.value='';
    read.checked=false;
}

btn.addEventListener('click', function() {
  modalContainer.classList.toggle('hidden');
  clear();
});

btn2.addEventListener('click', function() {
    modalContainer.classList.toggle('hidden');
    clear();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleSaved = title.value;
    const authorSaved = author.value;
    const pagesSaved = pages.value;
    const readSaved = read.checked;
    
    addBookToLibrary(titleSaved,authorSaved,pagesSaved,readSaved);
    modalContainer.classList.toggle('hidden');
    clear();
    
});

let myLibrary = [];

function Book(book,author,page,read) {
  this.book=book;
  this.author=author;
  this.page=page;
  this.read=read;
}

function addBookToLibrary(titleSaved,authorSaved,pagesSaved,readSaved) {

  const book= new Book(titleSaved,authorSaved,pagesSaved,readSaved);
  myLibrary.push(book);

  const div = document.createElement('div');
  div.className='dummybox';
  mainContent.appendChild(div);

  const bookId = 'book-' + Date.now();
  div.setAttribute('data-id', bookId);

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const remove = document.createElement('div');
  const removebutton = document.createElement('button');

  remove.className='remove';
  removebutton.className='removee';
  remove.appendChild(removebutton);

  removebutton.textContent='Remove';
  p1.textContent = `Title: ${titleSaved}`;
  p2.textContent =`Author: ${authorSaved}`;
  p3.textContent =`# of pages: ${pagesSaved}`;

  if(readSaved){
     input.checked=true;
  }

  label.textContent = 'Read:';
  label.htmlFor = `CustomRead-${bookId}`;
  input.id = `CustomRead-${bookId}`;
  input.type = 'checkbox'; 

  input.addEventListener('change', function(event) {
    const checkbox = event.target;
    const boxId = checkbox.parentElement.parentElement.getAttribute('data-id');
    
    
    const bookIndex = myLibrary.findIndex(function(book) {
      return 'book-' + book.id === boxId;
     });
    

     if (bookIndex !== -1) {
      myLibrary[bookIndex].read = checkbox.checked;
     }
     });

  removebutton.addEventListener('click', function(event) {
    const button = event.target;
    const boxId = button.parentElement.parentElement.getAttribute('data-id');
    

    const bookIndex = myLibrary.findIndex(function(book) {
      return 'book-' + book.id === boxId;
    });
    

     if (bookIndex !== -1) {
      myLibrary.splice(bookIndex, 1);
    }
    

     div.remove();
     });

  label.appendChild(input);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(label);
  div.appendChild(remove);
}