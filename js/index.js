// 로그인 modal창 열기, 닫기

const modalOpen = document.querySelector('.login-link');
const modalClose = document.querySelector('.close');
const modalBox = document.querySelector('.modal-box');

modalOpen.addEventListener('click', function(){
    modalBox.style.display = 'block';
})

modalClose.addEventListener('click', function(){
    modalBox.style.display = 'none';
})
