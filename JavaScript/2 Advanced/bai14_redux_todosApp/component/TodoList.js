import html from "../core.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos }) => {
  // console.log(props) // todos: Array(3)}
  // console.log(todos)

  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map((todo) =>
          TodoItem({ todo }) //truyền `todo` vào 1 object đẩy qua `TodoItem`
        )}
      </ul>
    </section>
  `;
};

export default connect()(TodoList); // không cần phải viết ra `connector`
/** export default connect()(TodoList);
 * cú pháp gọi hàm 2 lần
 * là trong `connect` lại trả về 1 hàm mới
 * vì `connect` return lại 1 hàm nên để gọi hàm đó chúng ta có () thứ 2 (có thể là nhiều cặp ngoặc tùy vào số lượng hàm lồng nhau trong hàm gốc)
 */
