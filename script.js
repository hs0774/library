const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelector('.btn');
const btn2= document.querySelector('.btn2');
const btn3 =document.querySelector('.btn3');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('Pages');
const read = document.getElementById('Read');


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

btn3.addEventListener('click', function(event) {
    event.preventDefault();
    const titleSaved = title.value;
    console.log(titleSaved);
    const authorSaved = author.value;
    console.log(authorSaved);
    const pagesSaved = pages.value;
    console.log(pagesSaved);
    const readSaved = read.checked;
    console.log(readSaved);
    
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
  myLibrary.push(new Book(titleSaved,authorSaved,pagesSaved,readSaved));
}