const list = [];

function todolist() {
  let k = '';

  for (let i = 0; i < list.length; i++) {
    const { name, duedate } = list[i];
    k += `
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="list.splice(${i}, 1); todolist();" class="delete">Delete</button>
    `;
  }

  document.querySelector('.list').innerHTML = k;
}

function add() {
  const name = document.querySelector('.do').value;
  const duedate = document.querySelector('.duedate').value;

  if (name.trim() && duedate) {
    list.push({ name, duedate });
    document.querySelector('.do').value = '';
    document.querySelector('.duedate').value = '';
    todolist();
  } else {
    alert('Please enter both todo and due date');
  }
}