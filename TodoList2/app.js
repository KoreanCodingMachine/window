// 1.인풋버튼에 입력을 하고 추가하기 버튼을 누르면
// 2.리스트에 등록한 정보가 담겨야한다.
// 3.삭제버튼을 누르면 등록한 정보가 삭제되어야한다.

// 1.인풋 버튼에 입력한 값을 알아야한다.
const input = document.getElementsByClassName('.footer_input').vaule;
const row = document.querySelector('.item_row');
const add = document.querySelector('.item_input');
const del = document.querySelector('.item_delete');
console.log(input);

add.addEventListener('click', () => {
  row.innerHTML = `
    <div class="item">
    <span class="item_name">Egg</span>
    <button onclick="delete_item()" class="item_delete">삭제</button>
    </div>
    `;
});

const add_item = () => {};

const delete_item = () => {};
