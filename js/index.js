const modalOpen = document.querySelector('.login-link');
const modalClose = document.querySelector('.close');
const modalBox = document.querySelector('.modal-box');

const loginId = document.querySelector('.userID');
const loginPw = document.querySelector('.userPW');
const loginBtn = document.querySelector('.login-btn');

// 로그인 modal창 열기, 닫기
modalOpen.addEventListener('click', function(){
    modalBox.style.display = 'block';
})

modalClose.addEventListener('click', function(){
    modalBox.style.display = 'none';
})

// 로그인 기능 
loginBtn.addEventListener('click', signIn);

function signIn(){
    if(loginId.value == ""){
        return alert('아이디를 입력하세요');
    } else if(loginPw.value == ""){
        return alert('비밀번호를 입력하세요');
    } else {
        return alert('로그인 성공!');
    }
}

