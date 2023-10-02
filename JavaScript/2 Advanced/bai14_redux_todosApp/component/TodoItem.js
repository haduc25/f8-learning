import html from "../core.js";

const TodoItem = ({ todo, index }) => {
  // console.log(todo)

  return html`
    <!-- <li class="completed editing"> -->
    <li class="${todo.completed && "completed"}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})
            // console.log(1)
            // khi check vào button dispatch 1 action
          "
        />
        <label>${todo.title}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${todo.title}" />
    </li>
  `;
};

export default TodoItem;
