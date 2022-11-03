// params.$target - 해당 컴포넌트가 추가가 될 DOM 요소 노드
// params.initialState - 해당 컴포넌트의 초기 상태
export default function TodoList({ $target, initialState }) {
  if (!new.target) {
    throw "Error : Component must be called with new operater!";
  }
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
      <ul class="todo">
        ${this.state
          .map(
            ({ text }) => `<li>${text} <button class="delete">del</button></li>`
          )
          .join("")}
      </ul>
    `;
  };

  this.render();
}
