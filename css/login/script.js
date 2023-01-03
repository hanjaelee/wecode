const idInput = document.getElementById('id-input');
const notice = document.getElementsByClassName('notice')[0];

idInput.addEventListener('keydown', (e) => {
  let noticeValue = `당신의 아이디는 바로 ${idInput.value} 입니다.`;

  notice.innerHTML = noticeValue;
});
