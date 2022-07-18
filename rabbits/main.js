const button = document.querySelector('.aside');
const special = document.querySelector('.special');

// 버튼을 눌렀을때 토기의 좌표로 스크롤 되는거

button.addEventListener('click', (e) => {
  special.scrollIntoView();
});
