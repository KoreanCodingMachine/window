/*
마우스가 움직일때마다 가로선 세로선 이미지가 같이 움직이면서
마우스로 움직인곳의 좌표를 화면에 출력한다. 
*/

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
console.log(targetRect);
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;
// 마우스가 움직일때마다 그곳의 좌표를 찍어서 출력하고
// 좌표를 찍은 곳으로 이동한다.

addEventListener('load', () => {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    //   css값을 수정할때는 px 단위로 해줘야한다.!!

    // 성능최적화 전 코드
    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // tag.innerHTML = `${x}px , ${y}px`;

    // 성능최적화 후 코드
    // transform:translate() 속성을 이용하면 성능 최적화를 할 수 있다.

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x + 20}px,${y + 20}px)`;
    tag.innerHTML = `${x}px , ${y}px`;
  });
});
