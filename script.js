const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add new todo
addBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText === '') return;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  // Random background gradient for each task
  const gradients = [
    'linear-gradient(135deg, #f6d365, #fda085)',
    'linear-gradient(135deg, #84fab0, #8fd3f4)',
    'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(135deg, #fccb90, #d57eeb)',
    'linear-gradient(135deg, #f093fb, #f5576c)'
  ];
  li.style.background = gradients[Math.floor(Math.random() * gradients.length)];

  li.innerHTML = `
    <span>${todoText}</span>
    <div>
      <button class="complete-btn"><i class="fa fa-check"></i></button>
      <button class="delete-btn"><i class="fa fa-trash"></i></button>
    </div>
  `;

  todoList.appendChild(li);
  todoInput.value = '';
});

// Event delegation for complete and delete
todoList.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  const parent = target.closest('.todo-item');

  if (target.classList.contains('delete-btn')) {
    parent.style.opacity = 0;
    parent.style.transform = 'translateX(100%)';
    setTimeout(() => parent.remove(), 300);
  }

  if (target.classList.contains('complete-btn')) {
    parent.classList.toggle('completed');
  }
});
