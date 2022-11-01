// params.$target - 해당 컴포넌트가 추가가 될 DOM 요소 노드
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList(params) {
  const $todoList = document.createElement('div');
  const $target = params.$target;
  $target.appenChild($todoList);

  this.state = params.initialState;

  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state.map(todo => `<li>${todo.text}</li>`).join('')}
      </ul>
    `

    
  }
}