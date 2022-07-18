const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const add_btn = document.querySelector('.footer_button');
const delete_btn = document.querySelector('.item_delete');

function onAdd() {
  //1.사용자가 정의한 인풋값을 받아온다.
  //2.새로운 아이템을 만든다.(텍스트(인풋값) , 삭제버튼)
  //3.새로운 아이템을 추가한다.
  //3-1.새로 추가된 아이템으로 스크롤링
  //4.input 값을 초기화한다. 커서가 focus 되게
  const text = input.value; // text라는 변수에 인풋값을 가져온다.
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text); // item이라는 변수에 새로 맏는 아이템값을 저장하고 추가한다.
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  // document.createElement()
  // document.setAttribute()
  // documnet.appendChild()

  const item_row = document.createElement('li');
  item_row.setAttribute('class', 'item_row');

  const item_div = document.createElement('div');
  item_div.setAttribute('class', 'item');

  const item_name = document.createElement('span');
  item_name.setAttribute('class', 'item_name');
  item_name.innerText = text;

  const delete_button = document.createElement('button');
  delete_button.setAttribute('class', 'item_delete');
  delete_button.innerText = '-';
  delete_button.addEventListener('click', () => {
    items.removeChild(item_row);
  });
  //   아이템 디바이더
  const item_divider = document.createElement('div');
  item_divider.setAttribute('class', 'item_divider');

  item_div.appendChild(item_name);
  item_div.appendChild(delete_button);

  item_row.appendChild(item_div);
  item_row.appendChild(item_divider);

  return item_row;
}

add_btn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
