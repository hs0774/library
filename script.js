const modalContainer = document.querySelector('.modal-container');
const btn = document.querySelector('.btn');
const btn2= document.querySelector('.btn2');
const btn3 =document.querySelector('.btn3');

btn.addEventListener('click', function() {
  modalContainer.classList.toggle('hidden');
});
btn2.addEventListener('click', function() {
    modalContainer.classList.toggle('hidden');
});
btn3.addEventListener('click', function() {
    modalContainer.classList.toggle('hidden');
});
